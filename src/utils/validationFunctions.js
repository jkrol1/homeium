//Sign in validation functions

// Email field

const validateEmailFieldSignIn = ({ email }, errors) => {

  if (!/\S+@\S+\.\S+/.test(email)) return {
    ...errors,
    email: 'Email address is invalid'
  }

  if (errors.email) delete errors.email;

  return {
    ...errors,
  };
};

// Password field

const validatePasswordFieldSignIn = ({ password }, errors) => {

  if (!password) return {
    ...errors,
    password: 'Password is required'
  }

  if (errors.password) delete errors.password;

  return {
    ...errors
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

  if (errors.email) delete errors.email;

  return {
    ...errors
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

  if (errors.password) delete errors.password;

  return {
    ...errors
  };
};

// Password confirmation

const validatePasswordConfirmationField = ({ password, passwordConfirmation }, errors) => {

  if (password !== passwordConfirmation) return {
    ...errors,
    passwordConfirmation: 'Your password and confirmation password do not match'
  }

  if (errors.passwordConfirmation) delete errors.passwordConfirmation;

  return {
    ...errors
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