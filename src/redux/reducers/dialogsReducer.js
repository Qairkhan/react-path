import ACTION_TYPES from "../actionTypes";

const initialState = {
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Salem alem" },
    { id: 3, message: "4to tam" },
    { id: 4, message: "Da nu" },
    { id: 5, message: "Realno?" },
  ],
  usersData: [
    { id: 1, name: "Mukha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Belyi" },
    { id: 4, name: "Mysyk" },
    { id: 5, name: "Alina" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.payload,
      };

    case ACTION_TYPES.SEND_MESSAGE:
      const body = action.newMessageBody;

      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, message: body }],
      };

    default:
      return state;
  }
};

export {dialogsReducer};
