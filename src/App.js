import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import ProtectedExample from './pages/ProtectedExample'
import PublicExample from './pages/PublicExample'
import AuthService from './services/index'

class App extends Component {
	render() {
		//creates new instance of AuthService class
		let auth = new AuthService()
		return (
			<div>
				<Router>
					{(auth.loggedIn())
						? <Switch>
								<Route path="/ProtectedExample" component={ProtectedExample} />
								<Route path="/PublicExample" component={PublicExample} />
								<Route path="/LogIn" component={LogIn} />
								<Route path="/register" component={Register} />
								<Route path="/" component={Landing} />
							</Switch>
							//if not logged in
						: <Switch>
								<Route path="/PublicExample" component={PublicExample} />
								<Route path="/ProtectedExample" component={Register} />
								<Route path="/" component={Landing} />
							</Switch>}
				</Router>
			</div>
		);
	}
}

export default App;
