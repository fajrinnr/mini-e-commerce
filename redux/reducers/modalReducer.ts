const intialState = false;

const modalReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_STATUS_MODAL":
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
