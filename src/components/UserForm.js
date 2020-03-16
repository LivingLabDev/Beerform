// this is the parrent component.

import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {
 // State is an object
    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // pProceed to the next step

    nextStep = () => {
        //taking the step out using destructoring
        // pulling the state out and putting it into a variable.
        // the steps are used as "rounds within the game"
        const{ step } = this.state;
        this.setState({
            step: step +1
        });
    }
    // going back to the previous step

    prevStep = () => {
        const {step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fiels change
    // takes an event
    handleChange = input => e => {
        // takes whatever the input is and we want to set it to whatever the value (of that input) is. 
        // we can get that with the event; the event is an object and holds whatever the previous value was.

        // everytime the user inputs a value in the text field, this method gets called; The method is fired from FormUserDetails in the render component. 
        // it also gets called from the UserForm (below) in the switch state change. 
        this.setState({[input]: e.target.value});
    }


    render() {

        // this is where the components are displayed. 
        // depending on which step we are we will display something.
        // again we deconstruct the step, pulling the state out.
        const {step} = this.state;
        // pull out all of the fields.
        const { firstName, lastName, email, occupation, city, bio} = this.state;
        // we put it into a new value; that way we can put this into the form for each component. 
        const values = { firstName, lastName, email, occupation, city, bio}
        
        // instead of having a normal return we will input a switch state.
            // the input of the switch is the step, because that is what we are looking at. 
        switch(step) {
            case 1:
                // we are going to return the first form details.
            
            return (
                <FormUserDetails 
                // we will add in a couple of props. 
                // calls the method nextstep and increases the step.
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    // we pass in the values from the statechange. 
                    values={values}
                /> 
            )
            case 2:
                return <h1> FormPersonalDetails</h1>
            case 3:
                 return  <h1> confirm </h1>  
            case 4:
                 return  <h1>Success</h1>    
        }


    }
}

export default UserForm;
