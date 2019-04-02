// Parent component, create a class based component

import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: ''
	}

	// nextStep, previousStep methods are used with state to figure out which set of questions to render
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	}

	previousStep = () => {
		const { step } = this.state;
		this.state({
			step: step - 1
		})
	}

	// Handle the fields changing.
	handleChange = input => e => {
		this.setState({
			[input]: e.target.value
		})
	}

	render() {
		const { step } = this.state;
		const { firstName, lastName, email, occupation, bio } = this.state;
		const values = { firstName, lastName, email, occupation, bio }

		switch(step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				)
				case 2:
					return (
						<FormPersonalDetails
							previousStep={this.previousStep}
							nextStep={this.nextStep}
							handleChange={this.handleChange}
							values={values}
						/>
					)
				case 3:
					return <h1>Confirm</h1>
				case 4:
					return <h1>Success</h1>
		}
		return (
			<div>
				// depending upon which step we're on, we display the corresponding component
			</div>
		)
	}
}

export default UserForm
