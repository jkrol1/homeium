import React from 'react';
import InputField from '../InputField/InputField';
import CustomButton from '../CustomButton/CustomButton';
import useForm from '../../hooks/useForm';
import { signInValidation } from '../../utils/validationFunctions';
import ValidationError from '../../components/ValidationError/ValidationError';
import ValidationPassed from '../../components/ValidationPassed/ValidationPassed';
import './SignIn.scss';

const SignIn = () => {

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
        handleKeyDown
    } = useForm(initialValues, signInValidation, () => console.log('Submitted'));

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
                {errors.email && touched.email ? <ValidationError errorMessage={errors.email} /> : null}
                {!errors.email && touched.email ? <ValidationPassed /> : null}
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
                {errors.password && touched.password ? <ValidationError errorMessage={errors.password} /> : null}
                {!errors.password && touched.password ? <ValidationPassed /> : null}
            </div>
            <CustomButton
                type='submit'
                content='Sign in'
                modifier='parent-width-with-border'
            />
        </form>);
}

export default SignIn;