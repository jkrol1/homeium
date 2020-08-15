import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { animated } from 'react-spring';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import Notification from '../Notification/Notification';
import ValidationError from '../../components/ValidationError/ValidationError';
import ValidationPassed from '../../components/ValidationPassed/ValidationPassed';
import { signInValidation } from '../../utils/validationFunctions';
import {
  emailSignInStart,
  toggleShowSignInError,
} from '../../redux/user/userActions';
import { selectShowSignInError } from '../../redux/user/userSelectors';
import useForm from '../../hooks/useForm';
import './SignIn.scss';

const SignIn = ({ style }) => {
  const dispatch = useDispatch();
  const showSignInError = useSelector(selectShowSignInError);

  const onSubmit = async ({ email, password }) =>
    dispatch(emailSignInStart({ email, password }));
  const toggleNotification = () => {
    dispatch(toggleShowSignInError());
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleOnBlur,
    handleKeyDown,
    resetSelectedFields,
  } = useForm(initialValues, signInValidation, onSubmit);

  // Reset password field on authorization error

  useEffect(() => {
    if (showSignInError) {
      resetSelectedFields(['password']);
    }
  }, [showSignInError]);

  return (
    <animated.form
      style={style}
      className="SignIn"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="input-field-container">
        <InputField
          autoComplete="off"
          required
          placeholder="Email"
          type="email"
          name="email"
          value={values['email']}
          onChange={handleChange}
          onBlur={handleOnBlur}
          onKeyDown={handleKeyDown}
          modifier={
            errors.email
              ? 'error InputField--sign-in-sign-up-form'
              : 'sign-in-sign-up-form'
          }
        />
        {errors.email && touched.email && (
          <ValidationError errorMessage={errors.email} />
        )}
        {!errors.email && touched.email && <ValidationPassed />}
      </div>

      <div className="input-field-container">
        <InputField
          autoComplete="off"
          required
          placeholder="Password"
          type="password"
          name="password"
          value={values['password']}
          onChange={handleChange}
          onBlur={handleOnBlur}
          onKeyDown={handleKeyDown}
          modifier={
            errors.password
              ? 'error InputField--sign-in-sign-up-form'
              : 'sign-in-sign-up-form'
          }
        />
        {errors.password && touched.password && (
          <ValidationError errorMessage={errors.password} />
        )}
        {!errors.password && touched.password && <ValidationPassed />}
      </div>
      <CustomButton type="submit" content="Sign in" />
      {showSignInError && (
        <Notification
          toggleNotification={toggleNotification}
          message="Invalid email or password"
        />
      )}
    </animated.form>
  );
};

export default SignIn;
