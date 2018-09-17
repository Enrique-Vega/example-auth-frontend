import React, { Component } from 'react'
import RegisterPage from "./Register.js"
import LogIn from "./LogIn.js"

class Landing extends Component {
	render() {
		return (
			<div>
        <h1> WELCOME </h1>
        <a href="/register"><h2>Register</h2></a>
        <a href="/LogIn"><h2>Log In</h2></a>
			</div>
		);
	}
}

export default Landing;
