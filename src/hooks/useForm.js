import { useState, useEffect, useRef } from 'react';

const useForm = (initialValues, validationFunctions, onSubmit) => {

    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        e.persist();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleOnBlur = (e) => {
        const { name } = e.target;
        setErrors(validationFunctions[name](values, errors));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) onSubmit();
    }

    return {
        values,
        errors,
        handleChange,
        handleOnBlur,
        handleSubmit
    };

}

export default useForm;