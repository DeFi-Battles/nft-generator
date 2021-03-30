import {allElementColors} from '../../constants';
import './index.scss';

export const Monster2: React.FC<{
	colors: Record<string, number>;
	element: string;
}> = ({colors, element}) => {
	const elemColors = allElementColors[element];
	const color1 = elemColors[colors.color1 % elemColors.length];
	const color2 = elemColors[colors.color2 % elemColors.length];
	const color3 = elemColors[colors.color3 % elemColors.length];

	return (
		<div className="Monster2-wrapper" style={{background: '#2f2e2b'}}>
			<div className="box">
				<div
					className="body"
					style={{
						background: `linear-gradient(180deg, ${color1} 0%, ${color2} 100%)`,
					}}
				>
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
					<div className="hair-1" />
					<div className="hair-2" />
					<div className="hair-3" />
					<div className="brow-1" />
					<div className="brow-2" />
					<div className="mouth">
						<div className="tognue" />
						<div className="tooth-1" />
						<div className="tooth-2" />
					</div>
					<div className="ear-left" style={{background: color3}}>
						<div className="line-1" />
						<div className="line-2" />
						<div className="line-3" />
					</div>
					<div className="ear-right" style={{background: color3}}>
						<div className="line-1" />
						<div className="line-2" />
						<div className="line-3" />
					</div>
				</div>
				{/* end of body */}
				<div className="hand" style={{borderTop: `solid 35px ${color3}`}}>
					<div className="toe-left" />
					<div className="toe-right" />
				</div>
				<div
					className="leg-left"
					style={{
						background: `linear-gradient(180deg, ${color2} 0%, ${color3} 100%)`,
					}}
				/>
				<div
					className="leg-right"
					style={{
						background: `linear-gradient(180deg, ${color2} 0%, ${color3} 100%)`,
					}}
				/>
			</div>
		</div>
	);
};

export default Monster2;
