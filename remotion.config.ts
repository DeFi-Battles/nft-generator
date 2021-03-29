import fs from 'fs';
import path from 'path';
import {Config, WebpackConfiguration} from 'remotion';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
	path.resolve(appDirectory, relativePath);

Config.Output.setCodec('h264');
Config.Output.setImageSequence(false);
Config.Rendering.setImageFormat('jpeg');

Config.Bundling.overrideWebpackConfig((currentConfiguration) => {
	return WebpackOverrideFxn(currentConfiguration);
});

export const WebpackOverrideFxn = (
	currentConfiguration: WebpackConfiguration
): WebpackConfiguration => {
	return {
		...currentConfiguration,
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []),
				// Add more loaders here
				{
					// look for .css or .scss files
					test: /\.(css|scss)$/,
					// in the `src` directory
					include: [resolveApp('src')],
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
			],
		},
	};
};
