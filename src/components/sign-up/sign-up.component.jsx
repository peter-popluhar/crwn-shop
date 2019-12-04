import React, {useState} from 'react';
import {connect} from 'react-redux';
import './sign-up.styles.scss'
import FormInput from './../form-input/form-input.component.jsx'
import CustomButton from './../custom-button/custom-button.component.jsx'
import {signUpStart} from './../../redux/user/user.actions'

const SignUp = ({signUpStart}) => {

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('pasword doesnt match');
            return;
        }

        signUpStart({displayName, email, password })
    }



    const handleChange = event => {
        const {value, name } = event.target;

        setCredentials({...userCredentials, [name]: value})
    }

    return(
        <div className="sign-up">
            <h2>
                I do not have account
            </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput
                    name="displayName"
                    type="text"
                    value={displayName}
                    required
                    handleChange={handleChange}
                    label="Display name"
                />
                <FormInput
                    name="email"
                    type="email"
                    value={email}
                    required
                    handleChange={handleChange}
                    label="Email"
                />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    required
                    handleChange={handleChange}
                    label="Password"
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    required
                    handleChange={handleChange}
                    label="Confirm password"
                />

                <div className="buttons">
                    <CustomButton type="submit">SIGN UP </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
