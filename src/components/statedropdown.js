import React from 'react';

export default function StateDropDown(props) {
	return (
		<>
			<select
				id="state"
				value={props.value}
				placeholder="State"
				onChange={props.onChange}
				required
			>
				{props.array.map(value => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
		</>
	);
}
