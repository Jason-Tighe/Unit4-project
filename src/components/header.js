import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';
import { withRouter } from 'react-router';
import MapModal from './MapModal';

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
		<div id="header" className="navbar navbar-dark bg-dark">
			<div id="header" className="mr-auto p-2">
				<div className="display-3">CoviTRKR</div>
			</div>
			{!window.localStorage.getItem('token') ? (
				<> </>
			) : (
				<>
					<div>
						<p className="p-1">
							Hello {window.localStorage.getItem('loggedInUser')}
						</p>
						<button className="btn btn-primary" onClick={handleLogout}>
							Logout
						</button>
						<MapModal />
					</div>
				</>
			)}
		</div>
	);
};
export default withRouter(Header);
