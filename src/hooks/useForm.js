import { useState } from 'react';

// Helper function for creating initialTouchedObject

const createInitialTouchedObject = (initialValues) => {

    let initialTouchedObject = {};

    Object.keys(initialValues).forEach(key => {
        initialTouchedObject[key] = false;
    });

    return initialTouchedObject;
};


const useForm = (initialValues, validationFunctions, onSubmit) => {

    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState(createInitialTouchedObject(initialValues) || {});

    const handleChange = (e) => {
        e.persist();
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleOnBlur = (e) => {
        e.persist();
        setTouched({ ...touched, [e.target.name]: true });
        setErrors(validationFunctions[e.target.name](values, errors));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0 && !Object.values(touched).includes(false)) onSubmit(values);
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            form.elements[index + 1].focus();
        };
    };

    const resetSelectedFields = (fields) => {
        fields.forEach(field => setValues({ ...values, [field]: '' }));
    }

    return {
        values,
        errors,
        touched,
        handleChange,
        handleOnBlur,
        handleSubmit,
        handleKeyDown,
        resetSelectedFields
    };

};

export default useForm;