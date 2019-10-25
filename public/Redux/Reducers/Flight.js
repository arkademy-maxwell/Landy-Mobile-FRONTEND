const initialState = {
  FlightList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
};

const Flight = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_FLIGHT_PENDING':
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false,
      };
    case 'GET_FLIGHT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_FLIGHT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        FlightList: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default Flight;
