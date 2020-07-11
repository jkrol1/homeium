import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import Notification from '../Notification/Notification';
import ValidationError from '../../components/ValidationError/ValidationError';
import ValidationPassed from '../../components/ValidationPassed/ValidationPassed';
import { signInValidation } from '../../utils/validationFunctions';
import {
    emailSignInStart,
    toggleShowSignInError
} from '../../redux/user/userActions';
import { selectShowSignInError } from '../../redux/user/userSelectors';
import useForm from '../../hooks/useForm';
import './SignIn.scss';

const SignIn = () => {

    const dispatch = useDispatch();
    const showSignInError = useSelector(selectShowSignInError);

    const onSubmit = async ({ email, password }) => dispatch(emailSignInStart({ email, password }));
    const toggleNotification = () => { dispatch(toggleShowSignInError()) };

    const initialValues = {
        email: '',
        password: ''
    };

    const {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleOnBlur,
        handleKeyDown,
        resetSelectedFields
    } = useForm(initialValues, signInValidation, onSubmit);

    // Reset password field on authorization error  

    useEffect(() => {

        if (showSignInError) {
            resetSelectedFields(['password'])
        };

    }, [showSignInError]);

    return (
        <form
            className='SignIn'
            onSubmit={handleSubmit}
            noValidate
        >
            <div className='input-field-container'>
                <InputField
                    autoComplete='off'
                    required
                    placeholder='Email'
                    type='email'
                    name='email'
                    value={values['email']}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    onKeyDown={handleKeyDown}
                    modifier={errors.email ? 'error' : null}
                />
                {errors.email && touched.email
                    ? <ValidationError errorMessage={errors.email} />
                    : null}
                {!errors.email && touched.email
                    ? <ValidationPassed />
                    : null}
            </div>

            <div className='input-field-container'>
                <InputField
                    autoComplete='off'
                    required
                    placeholder='Password'
                    type='password'
                    name='password'
                    value={values['password']}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    onKeyDown={handleKeyDown}
                    modifier={errors.password ? 'error' : null}
                />
                {errors.password && touched.password
                    ? <ValidationError errorMessage={errors.password} />
                    : null}
                {!errors.password && touched.password
                    ? <ValidationPassed />
                    : null}
            </div>
            <CustomButton
                type='submit'
                content='Sign in'
                modifier='parent-width-with-border'
            />
            {showSignInError
                ? <Notification toggleNotification={toggleNotification} message='Invalid email or password' />
                : null}
        </form>
    );
}

export default SignIn;