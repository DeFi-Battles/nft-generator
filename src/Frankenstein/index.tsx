import {allElementColors} from '../../constants';
import './index.scss';

export const Frankenstein: React.FC<{
	colors: Record<string, number>;
	element: string;
}> = ({colors, element}) => {
	const elemColors = allElementColors[element];
	const color1 = elemColors[colors.color1 % elemColors.length];
	const color2 = elemColors[colors.color2 % elemColors.length];
	const color3 = elemColors[colors.color3 % elemColors.length];

	return (
		<div className="frank-wrapper" style={{backgroundColor: color3}}>
			<div className="box">
				<div className="yellow-canvas">
					<div className="black-canvas" style={{backgroundColor: color2}}>
						<div className="face">
							<div className="face-copy" style={{backgroundColor: color1}} />
							<div className="hair" />
							<div className="wound-horizontal-line" />
							<div className="wound-vertical-line-left" />
							<div className="wound-vertical-line-middle" />
							<div className="wound-vertical-line-right" />
							<div className="ear-left" />
							<div className="ear-right" />
							<div className="eye-left-orange">
								<div className="eye-yellow">
									<div className="pupil" />
								</div>
							</div>
							{/* end of eye-left-orange*/}
							<div className="eye-right-orange">
								<div className="eye-yellow">
									<div className="pupil" />
								</div>
							</div>
							{/* end of eye-right-orange*/}
							<div className="brow" />
							<div className="nose-line" />
							<div className="mouth" />
							<div className="screw-small">
								<div className="screw-big-left" />
								<div className="screw-big-right" />
							</div>
						</div>
						{/* end of face */}
					</div>
					{/* End black-canvas */}
				</div>
				{/* End yellow-canvas */}
				<div className="orange-canvas" />
				<div className="black-line" />
				<div className="black-round-canvas">
					<div className="knee-left">
						<div className="inner-knee">
							<div className="spot-left" />
						</div>
					</div>
					<div className="knee-right">
						<div className="inner-knee">
							<div className="spot-right" />
						</div>
					</div>
					<div className="keyboard-1" />
					<div className="keyboard-2" />
					<div className="keyboard-3" />
					<div className="keyboard-4" />
					<div className="keyboard-5" />
					<div className="keyboard-6" />
					<div className="green-line" />
				</div>
				{/* end of black round canvas */}
			</div>
		</div>
	);
};
