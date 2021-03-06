import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	useHistory
} from 'react-router-dom';
import StateDropDown from '../components/statedropdown.js';

const RegisterInformation = props => {
	const [personal, setPersonal] = useState({
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		dateOfBirth: ''
	});
	const [location, setLocation] = useState({
		state: '',
		city: '',
		zipCode: ''
	});
	const [doctor, setDoctor] = useState({
		firstName: '',
		lastName: '',
		doctorPhone: '',
		email: '',
		facilityName: '',
		facilityLocation: '',
		facilityNumber: ''
	});
	const history = useHistory();
	const [confirmPassword, setConfirmPassword] = useState({
		cpassword: ''
	});
	const statesArray = [
		'AL',
		'AK',
		'AZ',
		'AR',
		'CA',
		'CO',
		'CT',
		'DC',
		'DE',
		'FL',
		'GA',
		'HI',
		'ID',
		'IL',
		'IN',
		'IA',
		'KS',
		'KY',
		'LA',
		'ME',
		'MD',
		'MA',
		'MI',
		'MN',
		'MS',
		'MO',
		'MT',
		'NE',
		'NV',
		'NH',
		'NJ',
		'NM',
		'NY',
		'NC',
		'ND',
		'OH',
		'OK',
		'OR',
		'PA',
		'RI',
		'SC',
		'SD',
		'TN',
		'TX',
		'UT',
		'VT',
		'VA',
		'WA',
		'WV',
		'WI',
		'WY'
	];

	const handleChangePersonal = e => {
		setPersonal({ ...personal, [e.target.id]: e.target.value });
	};

	const handleChangeConfirmPassword = e => {
		setConfirmPassword({ ...confirmPassword, [e.target.id]: e.target.value });
	};

	const handleChangeDoctor = e => {
		setDoctor({ ...doctor, [e.target.name]: e.target.value });
	};
	const handleChangeLocation = e => {
		setLocation({ ...location, [e.target.id]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (personal.password !== confirmPassword.cpassword) {
			alert('Passwords do not match');
			setPersonal({ ...personal, password: '' });
			setConfirmPassword({ cpassword: '' });
			return;
		}

		const allData = {
			...personal,
			location: { ...location },
			doctor: { ...doctor }
		};
		try {
			const response = await fetch('/api/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(allData)
			});

			const data = await response.json();
			if (data.message) {
				alert(data.message);
				return;
			}
			// window.localStorage.setItem('token', data.token);
			// window.localStorage.setItem('loggedInUser', data.user.email);
		} catch (error) {
			console.error(error);
		}
		history.push('/');
	};

	const containerStyle = {
		width: '40vw'
	};

	const bgStyle = {
		backgroundColor: 'rgb(40, 44, 49)'
	};

	const bgStyle1 = {
		border: 'black 1px inset'
	};

	const bgStyle2 = {
		backgroundColor: 'rgb(235, 154, 255)'
	};

	return (
		<>
			<div className="container">
				<h3 className="row justify-content-center">Register your account</h3>

				<form
					onSubmit={handleSubmit}
					className="row justify-content-center"
					id="registerForm"
					style={bgStyle1}
				>
					<div className="col-md-auto">
						<h4 className="reg-card-title">Personal Information</h4>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="firstName"
								type="text"
								placeholder="First Name"
								value={personal.firstName}
								onChange={handleChangePersonal}
								required
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="lastName"
								type="text"
								placeholder="Last Name"
								value={personal.lastName}
								onChange={handleChangePersonal}
								required
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="dateOfBirth"
								type="date"
								placeholder="Date of Birth"
								value={personal.dateOfBirth}
								onChange={handleChangePersonal}
								required
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="city"
								type="text"
								placeholder="City"
								value={location.city}
								onChange={handleChangeLocation}
								required
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<StateDropDown
								text="Select your State"
								onChange={handleChangeLocation}
								array={statesArray}
								value={location.state}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="zipCode"
								type="number"
								placeholder="Zip Code"
								value={personal.zipCode}
								onChange={handleChangeLocation}
								required
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="email"
								type="text"
								placeholder="Email"
								value={personal.email}
								onChange={handleChangePersonal}
								required
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="password"
								type="password"
								placeholder="Password"
								value={personal.password}
								onChange={handleChangePersonal}
								required
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="cpassword"
								type="password"
								placeholder="Confirm Password"
								value={confirmPassword.cpassword}
								onChange={handleChangeConfirmPassword}
								required
							/>
						</div>
					</div>

					<div className="col-md-auto">
						<h4 className="reg-card-title">Medical Information</h4>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="drFirstName"
								name="firstName"
								type="text"
								placeholder="Physician First Name"
								value={doctor.firstName}
								onChange={handleChangeDoctor}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="drLastName"
								name="lastName"
								type="text"
								placeholder="Physician Last Name"
								value={doctor.lastName}
								onChange={handleChangeDoctor}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="doctorPhone"
								name="doctorPhone"
								type="number"
								placeholder="Physician Phone Number"
								value={doctor.doctorPhone}
								onChange={handleChangeDoctor}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="drEmail"
								name="email"
								type="text"
								placeholder="Physician email"
								value={doctor.email}
								onChange={handleChangeDoctor}
							/>
						</div>
						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="facilityName"
								name="facilityName"
								type="text"
								placeholder="Facility Name"
								value={doctor.facilityName}
								onChange={handleChangeDoctor}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="facilityLocation"
								name="facilityLocation"
								type="text"
								placeholder="Facility Location"
								value={doctor.facilityLocation}
								onChange={handleChangeDoctor}
							/>
						</div>

						<div className="p-1">
							<i className="fa fa-wpforms icon"></i>
							<input
								className="input-field"
								id="facilityNumber"
								name="facilityNumber"
								type="text"
								placeholder="Facility Phone Number"
								value={doctor.facilityNumber}
								onChange={handleChangeDoctor}
							/>
						</div>
					</div>
				</form>
				<div className="row justify-content-center" style={bgStyle}>
					<button
						type="submit"
						className="p-2 m-3 btn-lg btn btn-light"
						value="SUBMIT"
						form="registerForm"
					>
						SUBMIT
					</button>
				</div>
			</div>
		</>
	);
};
export default RegisterInformation;
