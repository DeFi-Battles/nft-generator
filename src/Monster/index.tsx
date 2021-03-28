import './index.scss';

export const Monster: React.FC = () => {
	return (
		<div className="Monster-wrapper">
			<div className="box">
				<div className="body" /> {/* end of body */}
				{/* ears */}
				<div className="ear-left">
					<div className="ear-left-spot-1" />
					<div className="ear-left-spot-2" />
					<div className="ear-left-spot-3" />
				</div>
				<div className="ear-right">
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
				<div className="hand-left">
					<div className="hand-toe-left-1" />
					<div className="hand-toe-left-2" />
				</div>
				<div className="hand-right">
					<div className="hand-toe-right-1" />
					<div className="hand-toe-right-2" />
				</div>
				{/* mouth, teeth, tognue */}
				<div className="mouth">
					<div className="mouth-copy" />
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
				<div className="belly" />
				{/* spots in the body */}
				<div className="spot-body-1" />
				<div className="spot-body-2" />
				<div className="spot-body-3" />
				<div className="spot-body-4" />
				<div className="spot-body-5" />
				<div className="spot-body-6" />
				<div className="spot-body-7" />
				{/* feet */}
				<div className="foot-left">
					<div className="foot-toe-left-1" />
					<div className="foot-toe-left-2" />
					<div className="foot-toe-left-3" />
					<div className="spot-foot-left-1" />
					<div className="spot-foot-left-2" />
					<div className="spot-foot-left-3" />
					<div className="spot-foot-left-4" />
					<div className="spot-foot-left-5" />
					<div className="spot-foot-left-6" />
					<div className="spot-foot-left-7" />
				</div>
				<div className="foot-right">
					<div className="foot-toe-right-1" />
					<div className="foot-toe-right-2" />
					<div className="foot-toe-right-3" />
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
