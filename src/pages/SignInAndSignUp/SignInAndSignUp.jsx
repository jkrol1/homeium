import React from 'react';
import { useDispatch } from 'react-redux';
import { googleSignInStart } from '../../redux/user/userActions';
import SignInSignUpChoice from '../../components/SignInSignUpChoice/SignInSignUpChoice';
import CustomButton from '../../components/CustomButton/CustomButton';
import { ReactComponent as GoogleSVG } from '../../assets/google.svg';
import './SignInAndSignUp.scss';

const SignInAndSignUpPage = () => {

    const dispatch = useDispatch();

    return (
        <main className='SignInAndSignUpPage'>
            <SignInSignUpChoice />
            <span className='SignInAndSignUpPage__google-info'>or continue with Google</span>
            <CustomButton content={<GoogleSVG />} modifier='google' onClick={() => dispatch(googleSignInStart())} />
        </main>);
};

export default SignInAndSignUpPage;