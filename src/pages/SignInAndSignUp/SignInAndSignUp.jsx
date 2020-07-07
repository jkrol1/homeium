import React from 'react';
import SignInSignUpChoice from '../../components/SignInSignUpChoice/SignInSignUpChoice';
import CustomButton from '../../components/CustomButton/CustomButton';
import { ReactComponent as GoogleSVG } from '../../assets/google.svg';
import './SignInAndSignUp.scss';

const SignInAndSignUpPage = () => (
    <main className='SignInAndSignUpPage'>
        <SignInSignUpChoice />
        <span className='SignInAndSignUpPage__google-info'>or continue with Google</span>
        <CustomButton content={<GoogleSVG />} modifier='google' />
    </main>
);

export default SignInAndSignUpPage;