/**
 * This is an example of a server that returns dynamic video.
 * Run `npm run server` to try it out!
 * If you don't want to render videos on a server, you can safely
 * delete this file.
 */

import {bundle} from '@remotion/bundler';
import {
	getCompositions,
	renderFrames,
	stitchFramesToVideo,
} from '@remotion/renderer';
import express from 'express';
import fs from 'fs';
import { NFTStorage, Blob } from 'nft.storage'
import os from 'os';
import path from 'path';
import {WebpackOverrideFxn} from './remotion.config';
import { NFT_STORAGE_API_KEY } from './secrets';

const client = new NFTStorage({token: NFT_STORAGE_API_KEY});

const app = express();
const port = 8000;
const compositionId = 'Frankenstein';

const cache = new Map<string, string>();

app.get('/', async (req, res) => {
	const sendFile = (file: string) => {
		fs.createReadStream(file)
			.pipe(res)
			.on('close', () => {
				res.end();
			});
	};
	const uploadToIPFS = async (file: string) => {
		const data = await fs.promises.readFile(file)
		const cid = await client.storeBlob(new Blob([data]))
		console.log(cid);
		res.send({cid});
	};
	try {
		// if (cache.get(JSON.stringify(req.query))) {
		// 	sendFile(cache.get(JSON.stringify(req.query)) as string);
		// 	return;
		// }
		const bundled = await bundle(
			path.join(__dirname, './src/index.tsx'),
			(progress) => console.log(progress),
			{
				webpackOverride: (currentConfig) => WebpackOverrideFxn(currentConfig),
			}
		);
		const comps = await getCompositions(bundled);
		const video = comps.find((c) => c.id === compositionId);
		if (!video) {
			throw new Error(`No video called ${compositionId}`);
		}
		res.set('content-type', 'application/json');

		const tmpDir = await fs.promises.mkdtemp(
			path.join(os.tmpdir(), 'remotion-')
		);
		await renderFrames({
			config: video,
			webpackBundle: bundled,
			onStart: () => console.log('Rendering frames...'),
			onFrameUpdate: (f) => {
				if (f % 10 === 0) {
					console.log(`Rendered frame ${f}`);
				}
			},
			parallelism: null,
			outputDir: tmpDir,
			userProps: req.query,
			compositionId,
			imageFormat: 'jpeg',
		});

		const finalOutput = path.join(tmpDir, 'out.mp4');
		await stitchFramesToVideo({
			dir: tmpDir,
			force: true,
			fps: video.fps,
			height: video.height,
			width: video.width,
			outputLocation: finalOutput,
			imageFormat: 'jpeg',
		});
		cache.set(JSON.stringify(req.query), finalOutput);
		// sendFile(finalOutput);
		uploadToIPFS(finalOutput);
		console.log('Video rendered and sent!');
	} catch (err) {
		console.error(err);
		res.json({
			error: err,
		});
	}
});

app.listen(port);

console.log(
	[
		`The server has started on http://localhost:${port}!`,
		'You can render a video by passing props as URL parameters.',
		'',
		'If you are running Hello World, try this:',
		'',
		`http://localhost:${port}?titleText=Hello,+World!&titleColor=red`,
		'',
	].join('\n')
);
