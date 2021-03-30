import {allElementColors} from '../../constants';
import './index.scss';

export const Tiger: React.FC<{
	colors: Record<string, number>;
	element: string;
}> = ({colors, element}) => {
	const elemColors = allElementColors[element];
	const color1 = elemColors[colors.color1 % elemColors.length];
	const color2 = elemColors[colors.color2 % elemColors.length];
	const color3 = elemColors[colors.color3 % elemColors.length];

	return (
		<div className="tiger-wrapper" style={{backgroundColor: color3}}>
			<div className="box">
				{/* Circular Head*/}
				<div className="head">
					{/* Circular Head Copy */}
					<div className="head-copy" style={{backgroundColor: color1}} />
					<div className="orange-head">
						<div
							className="orange-head-copy"
							style={{backgroundColor: color1, border: `${color1} 1px solid`}}
						/>
					</div>
					<div className="white-head" />
					<div className="chin" />
					{/* Left Ear*/}
					<div className="ear-left" style={{backgroundColor: color2}}>
						{/* Inner ear */}
						<div className="inner-ear-shadow" />
						<div className="inner-ear" />
						<div className="ear-line-1" />
						<div className="ear-line-2" />
						<div className="ear-line-3" />
					</div>
					{/* Right Ear */}
					<div className="ear-right" style={{backgroundColor: color2}}>
						{/* Inner Ear */}
						<div className="inner-ear-shadow" />
						<div className="inner-ear" />
						<div className="ear-line-1" />
						<div className="ear-line-2" />
						<div className="ear-line-3" />
					</div>
					{/* Left Outer Eye  */}
					<div className="eye-left-black">
						<div className="eye-white" />
						<div className="eye-inner-yellow" />
						<div className="eye-inner-black" />
						{/* Pupil  */}
						<div className="pupil-1" />
						<div className="pupil-2" />
					</div>
					{/* Right Outer Eye  */}
					<div className="eye-right-black">
						<div className="eye-white" />
						<div className="eye-inner-yellow" />
						<div className="eye-inner-black" />
						{/* Pupil  */}
						<div className="pupil-1" />
						<div className="pupil-2" />
					</div>
					{/* Nose */}
					<div className="nose">
						<div className="nose-copy" />
					</div>
					<div className="down-nose" />
					<div className="shadow-nose" />
					{/* Brows */}
					<div className="brow-left" />
					<div className="brow-right" />
					{/* Hair */}
					<div className="hair-1" />
					<div className="hair-2" />
					<div className="hair-3" />
					<div className="hair-left" />
					<div className="hair-right" />
					<div className="mouth" />
					<div className="tognue" />
					<div className="bottom-tognue" />
					<div className="tooth-1" />
					<div className="tooth-2" />
					<div className="moustach-left-1" />
					<div className="moustach-left-2" />
					<div className="moustach-left-3" />
					<div className="moustach-right-1" />
					<div className="moustach-right-2" />
					<div className="moustach-right-3" />
				</div>
				{/* End Head */}
			</div>
		</div>
	);
};

export default Tiger;
