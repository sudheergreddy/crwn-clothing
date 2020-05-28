import React, { Component } from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password does not match with the confirm password");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            
        } catch (error) {
            console.log("error creating user" + error.message);
        }

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I do not have an account</h2>
                <span>Sign Up with your userName, email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} value={this.state.displayName} label="UserName" type="text" name="displayName" />
                    <FormInput handleChange={this.handleChange} value={this.state.email} label="Email" type="email" name="email"/>
                    <FormInput handleChange={this.handleChange} value={this.state.password} label="Password" type="password" name="password"/>
                    <FormInput handleChange={this.handleChange} value={this.state.confirmPassword} label="Confirm Password" type="password" name="confirmPassword" />
                    <div className="button">
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;