import {Composition} from 'remotion';
import {Frankenstein} from './Frankenstein';
import Monster from './Monster';
import Monster2 from './Monster2';
import Tiger from './Tiger';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Frankenstein"
				component={Frankenstein}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Tiger"
				component={Tiger}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Monster"
				component={Monster}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Monster2"
				component={Monster2}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
