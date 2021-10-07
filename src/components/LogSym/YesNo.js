import React from 'react';

export default function YesNo(props) {
	return (
		<>
			<div className="d-flex align-items-baseline">
				<p className="form-check form-check-inline">{props.text}</p>
				<div className="form-check form-check-inline" onChange={props.onChange}>
					<input
						className="form-check-input"
						type="radio"
						id={`${props.name}-yes`}
						name={props.name}
						value={true}
					/>
					<label className="form-check-label" htmlFor={`${props.name}-yes`}>
						Yes
					</label>
				</div>
				<div className="form-check form-check-inline" onChange={props.onChange}>
					<input
						className="form-check-input"
						type="radio"
						id={`${props.name}-no`}
						name={props.name}
						value={false}
					/>
					<label className="form-check-label" htmlFor={`${props.name}-no`}>
						No
					</label>
				</div>
			</div>
		</>
	);
}
