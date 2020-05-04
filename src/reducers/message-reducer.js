const messageReducer = (state = [], action) => {
  const { message } = action;
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, message];
    default:
      return state;
  }
}

export default messageReducer;