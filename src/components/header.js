import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';
import { withRouter } from 'react-router';

const Header = props => {
	const history = useHistory();

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			window.localStorage.getItem('loggedInUser');
		}
	}, []);

	const handleLogout = () => {
		localStorage.clear();
		history.push('/');
	};

	return (
		<div>
			{!window.localStorage.getItem('token') ? (
				<div>
					<h3>CoviTRKR</h3>
				</div>
			) : (
				<div>
					<h3>CoviTRKR</h3>
					<p>Hello {window.localStorage.getItem('loggedInUser')}</p>
					<div>
						<button onClick={handleLogout}>logout</button>
					</div>
				</div>
			)}
		</div>
	);
};
export default withRouter(Header);
