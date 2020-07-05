//Sign in validation functions

// Email field

const validateEmailFieldSignIn = ({ email }, errors) => {

    if (!/\S+@\S+\.\S+/.test(email)) return {
        ...errors,
        email: 'Email address is invalid'
    }

    return {
        ...errors, email: null
    };
};

// Password field

const validatePasswordFieldSignIn = ({ password }, errors) => {

    if (!password) return {
        ...errors,
        password: 'Password is required'
    }

    return {
        ...errors, password: null
    };
};

// Sign up validaton functions

// Email field

const validateEmailFieldSignUp = ({ email }, errors) => {

    if (!email) return {
        ...errors,
        email: 'Email address is required'
    }

    else if (!/\S+@\S+\.\S+/.test(email)) return {
        ...errors,
        email: 'Email address is invalid'
    }

    return {
        ...errors, email: null
    };
};

// Password field

const validatePasswordFieldSignUp = ({ password }, errors) => {

    if (!password) return {
        ...errors,
        password: 'Password is required'
    }

    else if (password.length < 6) return {
        ...errors,
        password: 'Password must be 6 or more characters'
    }

    return {
        ...errors, password: null
    };
};

// Password confirmation

const validatePasswordConfirmationField = ({ password, passwordConfirmation }, errors) => {

    if (password !== passwordConfirmation) return {
        ...errors,
        passwordConfirmation: 'Your password and confirmation password do not match'
    }

    return {
        ...errors, passwordConfirmation: null
    };
}

// Export

export const signInValidation = {
    email: validateEmailFieldSignIn,
    password: validatePasswordFieldSignIn
};

export const signUpValidation = {
    email: validateEmailFieldSignUp,
    password: validatePasswordFieldSignUp,
    passwordConfirmation: validatePasswordConfirmationField
};