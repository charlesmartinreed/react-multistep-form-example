// Parent component, create a class based component

import React from 'react';
import FormUserDetails from './FormUserDetails'

export class extends React.Component() {
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
			step: step++;
		});
	}

	previousStep = () => {
		const { step } = this.state;
		this.state({
			step: step--;
		})
	}

	// Handle the fields changing.
	handleChange = input => e => {
		this.setState({
			[input]: e.target.value;
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
					return <h1>FormPersonalDetails</h1>
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
