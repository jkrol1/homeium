import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { Transition } from 'react-spring/renderprops';
import useTransitionSetup from '../../hooks/useTransitionSetup';
import './SignInSignUpChoice.scss';

const SignInSignUpChoice = () => {
  const [choice, setChoice] = useState('signin');

  const transitionSetup = useTransitionSetup();

  return (
    <section className="SignInSignUpChoice">
      <div className="SignInSignUpChoice__choices">
        <span
          onClick={() => (choice === 'signup' ? setChoice('signin') : null)}
          className={`SignInSignUpChoice__choice ${
            choice === 'signin' ? 'SignInSignUpChoice__choice--selected' : ''
          }`}
        >
          Sign In
        </span>
        <span
          onClick={() => (choice === 'signin' ? setChoice('signup') : null)}
          className={`SignInSignUpChoice__choice ${
            choice === 'signup' ? 'SignInSignUpChoice__choice--selected' : ''
          }`}
        >
          Sign Up
        </span>
      </div>
      <div className="SignInSignUpChoice__forms">
        <Transition items={choice} {...transitionSetup}>
          {(choice) =>
            choice === 'signin'
              ? (props) => <SignIn style={props} />
              : (props) => <SignUp style={props} />
          }
        </Transition>
      </div>
    </section>
  );
};

export default SignInSignUpChoice;
