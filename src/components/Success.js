import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
	render() {
		const { values } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Success"/>
					<h1>Thank You For Your Submission, {values.firstName}! </h1>
					<p>An email with further instructions has been sent to <span style={spanStyle}>{values.email}</span>.</p>
				</React.Fragment>
			</MuiThemeProvider>
		)
	}
}

const spanStyle = {
	color: '#5893d4'
}

export default Success
