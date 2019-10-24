const initialState = {
  RoomList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Room = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROOM_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ROOM_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ROOM_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        RoomList: action.payload.data.data
      };
    default:
      return state;
  }
};

export default Room;
