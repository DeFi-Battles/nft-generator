import {Composition} from 'remotion';
import {Monsters} from '../constants';
import {Frankenstein} from './Frankenstein';
import Monster from './Monster';
import Monster2 from './Monster2';
import Tiger from './Tiger';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id={Monsters.Frankenstein}
				component={Frankenstein}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					colors: {
						color1: 2,
						color2: 4,
						color3: 3,
					},
					element: 'grass',
				}}
			/>
			<Composition
				id={Monsters.Tigris}
				component={Tiger}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					colors: {
						color1: 2,
						color2: 4,
						color3: 3,
					},
					element: 'water',
				}}
			/>
			<Composition
				id={Monsters.Arthropod}
				component={Monster}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					colors: {
						color1: 2,
						color2: 4,
						color3: 3,
					},
					element: 'ground',
				}}
			/>
			<Composition
				id={Monsters.Apoidea}
				component={Monster2}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					colors: {
						color1: 2,
						color2: 4,
						color3: 3,
					},
					element: 'water',
				}}
			/>
		</>
	);
};
