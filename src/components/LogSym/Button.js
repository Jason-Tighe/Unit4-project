import React from 'react';

export default function Button(props) {
	return (
		<>
			<button
				className="m-1 btn btn-dark"
				id={props.id}
				type={props.type}
				value={props.value}
				onClick={props.onClick}
			>
				{props.value}
			</button>
		</>
	);
}
