import React from 'react';

export default function CheckBoxForm(props) {
	return (
		<div className="form-check">
			<input
				type="checkbox"
				className="form-check-input"
				id={props.name}
				onChange={props.onChange}
				name={props.name}
			/>
			<label className="form-check-label" htmlFor={props.name}>
				{props.label}
			</label>
		</div>
	);
}
