import React from 'react';

export default function StateDropDown(props) {
	return (
		<>
			<thead className="thead-dark">
				<tr>
					<th>{props.text}</th>
					<th scope="col1 col2">
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
					</th>
				</tr>
			</thead>
		</>
	);
}
