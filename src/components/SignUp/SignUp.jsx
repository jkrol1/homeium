import React from 'react';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import useForm from '../../hooks/useForm';
import { signUpValidation } from '../../utils/validationFunctions';
import ValidationError from '../../components/ValidationError/ValidationError';
import ValidationPassed from '../../components/ValidationPassed/ValidationPassed';
import './SignUp.scss';

const SignUp = () => {

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
        handleKeyDown
    } = useForm(initialValues, signUpValidation, () => console.log('Submitted'));

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
        </form>);
}

export default SignUp;