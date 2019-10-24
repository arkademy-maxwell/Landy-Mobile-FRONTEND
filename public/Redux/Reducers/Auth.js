const initialState = {
  Authentication: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case "GET_AUTH_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_AUTH_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_AUTH_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        Authentication: action.result.data
      };
    default:
      return state;
  }
};

export default Auth;
