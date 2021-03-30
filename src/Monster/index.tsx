import {allElementColors} from '../../constants';
import './index.scss';

export const Monster: React.FC<{
	colors: Record<string, number>;
	element: string;
}> = ({colors, element}) => {
	const elemColors = allElementColors[element];
	const color1 = elemColors[colors.color1 % elemColors.length];
	const color2 = elemColors[colors.color2 % elemColors.length];
	const color3 = elemColors[colors.color3 % elemColors.length];
	return (
		<div className="Monster-wrapper">
			<div className="box">
				<div className="body" style={{backgroundColor: color2}} />{' '}
				{/* end of body */}
				{/* ears */}
				<div className="ear-left" style={{backgroundColor: color1}}>
					<div className="ear-left-spot-1" />
					<div className="ear-left-spot-2" />
					<div className="ear-left-spot-3" />
				</div>
				<div className="ear-right" style={{backgroundColor: color1}}>
					<div className="ear-right-spot-1" />
					<div className="ear-right-spot-2" />
					<div className="ear-right-spot-3" />
				</div>
				{/* eyes */}
				<div className="eye-left">
					<div className="inner-eye" />
					<div className="pupil-1" />
					<div className="pupil-2" />
				</div>
				<div className="eye-right">
					<div className="inner-eye" />
					<div className="pupil-1" />
					<div className="pupil-2" />
				</div>
				{/* hands */}
				<div className="hand-left" style={{backgroundColor: color3}}>
					<div className="hand-toe-left-1" style={{backgroundColor: color3}} />
					<div className="hand-toe-left-2" style={{backgroundColor: color3}} />
				</div>
				<div className="hand-right" style={{backgroundColor: color3}}>
					<div className="hand-toe-right-1" style={{backgroundColor: color3}} />
					<div className="hand-toe-right-2" style={{backgroundColor: color3}} />
				</div>
				{/* mouth, teeth, tognue */}
				<div className="mouth">
					<div className="mouth-copy" style={{backgroundColor: color2}} />
					<div className="tognue">
						<div className="tognue-spot-1" />
						<div className="tognue-spot-2" />
						<div className="tognue-spot-3" />
						<div className="tognue-spot-4" />
					</div>
					<div className="tooth-1" />
					<div className="tooth-2" />
					<div className="tooth-3" />
				</div>
				{/* belly */}
				<div className="belly" style={{backgroundColor: color2}} />
				{/* spots in the body */}
				<div className="spot-body-1" />
				<div className="spot-body-2" />
				<div className="spot-body-3" />
				<div className="spot-body-4" />
				<div className="spot-body-5" />
				<div className="spot-body-6" />
				<div className="spot-body-7" />
				{/* feet */}
				<div className="foot-left" style={{backgroundColor: color3}}>
					<div className="foot-toe-left-1" style={{backgroundColor: color3}} />
					<div className="foot-toe-left-2" style={{backgroundColor: color3}} />
					<div className="foot-toe-left-3" style={{backgroundColor: color3}} />
					<div className="spot-foot-left-1" />
					<div className="spot-foot-left-2" />
					<div className="spot-foot-left-3" />
					<div className="spot-foot-left-4" />
					<div className="spot-foot-left-5" />
					<div className="spot-foot-left-6" />
					<div className="spot-foot-left-7" />
				</div>
				<div className="foot-right" style={{backgroundColor: color3}}>
					<div className="foot-toe-right-1" style={{backgroundColor: color3}} />
					<div className="foot-toe-right-2" style={{backgroundColor: color3}} />
					<div className="foot-toe-right-3" style={{backgroundColor: color3}} />
					<div className="spot-foot-right-1" />
					<div className="spot-foot-right-2" />
					<div className="spot-foot-right-3" />
					<div className="spot-foot-right-4" />
					<div className="spot-foot-right-5" />
					<div className="spot-foot-right-6" />
					<div className="spot-foot-right-7" />
				</div>
			</div>
		</div>
	);
};

export default Monster;
