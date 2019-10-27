import React from 'react';
import './sign-up.styles.scss'
import FormInput from './../form-input/form-input.component.jsx'
import CustomButton from './../custom-button/custom-button.component.jsx'

import {auth, createUserProfileDocument} from './../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('pasword doesnt match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error)
        }
    }



    handleChange = event => {
        const {value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>
                    I do not have account
                </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput
                        name="displayName"
                        type="text"
                        value={displayName}
                        required
                        handleChange={this.handleChange}
                        label="Display name"
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={email}
                        required
                        handleChange={this.handleChange}
                        label="Email"
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={password}
                        required
                        handleChange={this.handleChange}
                        label="Password"
                    />
                    <FormInput
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        required
                        handleChange={this.handleChange}
                        label="Confirm password"
                    />

                    <div className="buttons">
                        <CustomButton type="submit">SIGN UP </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;
