import './index.scss';

export const Monster2: React.FC = () => {
	return (
		<div className="wrapper">
			<div className="box">
				<div className="body">
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
					<div className="ear-left">
						<div className="line-1" />
						<div className="line-2" />
						<div className="line-3" />
					</div>
					<div className="ear-right">
						<div className="line-1" />
						<div className="line-2" />
						<div className="line-3" />
					</div>
				</div>
				{/* end of body */}
				<div className="hand">
					<div className="toe-left" />
					<div className="toe-right" />
				</div>
				<div className="leg-left" />
				<div className="leg-right" />
			</div>
		</div>
	);
};

export default Monster2;
