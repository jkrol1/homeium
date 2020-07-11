import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import Notification from '../Notification/Notification';
import ValidationError from '../../components/ValidationError/ValidationError';
import ValidationPassed from '../../components/ValidationPassed/ValidationPassed';
import { signUpValidation } from '../../utils/validationFunctions';
import {
    signUpStart,
    toggleShowSignUpError
} from '../../redux/user/userActions';
import {
    selectAuthError,
    selectShowSignUpError
} from '../../redux/user/userSelectors';
import useForm from '../../hooks/useForm';
import './SignUp.scss';

const SignUp = () => {

    const dispatch = useDispatch();
    const authError = useSelector(selectAuthError);
    const showSignUpError = useSelector(selectShowSignUpError);

    const onSubmit = async ({ email, password }) => dispatch(signUpStart({ email, password }));
    const toggleNotification = () => dispatch(toggleShowSignUpError());

    const initialValues = {
        email: '',
        password: '',
        passwordConfirmation: ''
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
    } = useForm(initialValues, signUpValidation, onSubmit);

    // Reset selected fields on authorization error  

    useEffect(() => {

        if (showSignUpError) {
            resetSelectedFields(['password', 'passwordConfirmation']);
        };

    }, [showSignUpError]);

    return (
        <form
            className='SignUp'
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
            <div className='input-field-container'>
                <InputField
                    autoComplete='off'
                    required
                    placeholder='Password confirmation'
                    type='password'
                    name='passwordConfirmation'
                    value={values['passwordConfirmation']}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    onKeyDown={handleKeyDown}
                    modifier={errors.passwordConfirmation || errors.password ? 'error' : null}
                />

                {(errors.passwordConfirmation || errors.password) && touched.passwordConfirmation
                    ? <ValidationError errorMessage={errors.passwordConfirmation} />
                    : null}
                {(!errors.passwordConfirmation && !errors.password) && touched.passwordConfirmation
                    ? <ValidationPassed />
                    : null}
            </div>
            <CustomButton
                type='submit'
                content='Sign up'
                modifier='parent-width-with-border'
            />
            {showSignUpError
                ? <Notification toggleNotification={toggleNotification} message={authError.message} />
                : null}
        </form>);
}

export default SignUp;