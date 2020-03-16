import React, { Component } from 'react';
// nice icons
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// a nav bar
import AppBar from 'material-ui/AppBar';
// text fields
import TextField from 'material-ui/TextField';
// buttons
import RaisedButton from 'material-ui/RaisedButton';
import App from '../App';

export class FormUserDetails extends Component {
    // 
    continue = e => {
        // prevent default paraments
        e.preventDefault();
        // then call next step function from userforms
        this.props.nextStep();

    }
    render() {
        // pull value from the props of the userForm
        const { values } = this.props;
        //this.props.values; 


        return (
            // wrap everything in the theme provider
            // we can only put in a single element. 
            // to do this, we use a react fragment, which is like a fake dom (html) element. 
            <MuiThemeProvider>
                <React.Fragment> 
                    <AppBar title ="enter order round details"/> 

                    
                </React.Fragment>
        
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;
