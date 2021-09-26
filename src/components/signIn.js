import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';

const SignIn = props => {
	const [signin, setSignin] = useState([]);
	const history = useHistory();

	const handleChange = e => {
		setSignin({ ...signin, [e.target.id]: e.target.value });
	};

	const handleLogin = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(signin)
			});
			const data = await response.json();
			console.log(data.token);
			console.log(data.user.email);
			window.localStorage.setItem('id', data.user.id);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.email);
		} catch (error) {
			console.error(error);
		}
		history.push('/');
	};

	return (
		<div>
			<h3>Sign in to your account</h3>
			<form>
				<div className="input-container">
					<i className="fa fa-user icon"></i>
					<input
						className="input-field"
						id="email"
						type="text"
						placeholder="User Email"
						name="email"
						value={signin.email}
						onChange={handleChange}
					/>
				</div>

				<div className="input-container">
					<i className="fa fa-key icon"></i>
					<input
						className="input-field"
						id="password"
						type="password"
						placeholder="Password"
						name="password"
						value={signin.password}
						onChange={handleChange}
					/>
				</div>
			</form>
			<button type="button" onClick={handleLogin}>
				Login
			</button>{' '}
			<br />
			<Link to="/SignUp">
				<button type="button">Register</button>
			</Link>
		</div>
	);
};
export default SignIn;
