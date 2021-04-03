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
import {Blob, NFTStorage} from 'nft.storage';
import os from 'os';
import path from 'path';
import {NFT} from './constants';
import {WebpackOverrideFxn} from './remotion.config';
import {NFT_STORAGE_API_KEY} from './secrets';
import {processDNA, uploadToIPFS} from './service';

const client = new NFTStorage({token: NFT_STORAGE_API_KEY});

const app = express();
const port = 8000;
const compositionId = 'Frankenstein';

const cache = new Map<string, string>();

app.get('/', async (req, res) => {
	try {
		if (cache.get(JSON.stringify(req.query))) {
			const cidLink = cache.get(JSON.stringify(req.query)) as string;
			res.json({cid: cidLink});
			return;
		}
		const {dna} = req.query;
		if (!dna) return res.status(400).send('Error Bad Request, send DNA');
		const [NFT_INFO, monsterType, element, colors] = processDNA(String(dna));
		const NFT_DATA = NFT_INFO as NFT;
		console.log(NFT_INFO, monsterType, element, colors, 'NFT_INFO, colors');

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
			userProps: {
				colors,
				element,
			},
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
		const videoCID: string = await uploadToIPFS(finalOutput);
		const videoLink = `https://ipfs.io/ipfs/${videoCID}`;
		NFT_DATA.image = videoLink;
		const buf = Buffer.from(JSON.stringify(NFT_DATA));
		const cid = await client.storeBlob(new Blob([buf]));
		console.log(cid);
		const cidLink = `https://ipfs.io/ipfs/${cid}`;
		cache.set(JSON.stringify(req.query), cidLink);
		res.json({cid: cidLink});
		console.log('NFT Gen with DNA ', dna);
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
		'Try this to get first nft',
		'',
		`http://localhost:${port}?dna=108596180112682612922228753751472530619048654078310860587450472893954680635717`,
		'',
	].join('\n')
);
