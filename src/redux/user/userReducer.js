import userActionTypes from './userActionTypes';

const INITIAL_STATE = {
  activeUser: null,
  error: null,
  showSignUpError: null,
  showSignInError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        activeUser: action.payload,
        error: null,
        showSignInError: null
      }
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        activeUser: null,
        error: null,
      }
    case userActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
        showSignInError: true
      }
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
        showSignUpError: true
      }
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case userActionTypes.TOGGLE_SHOW_SIGN_IN_ERROR:
      return {
        ...state,
        showSignInError: !state.showSignInError
      }
    case userActionTypes.TOGGLE_SHOW_SIGN_UP_ERROR:
      return {
        ...state,
        showSignUpError: !state.showSignUpError
      }
    default:
      return state
  };
};

export default userReducer;