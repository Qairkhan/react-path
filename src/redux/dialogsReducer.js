import ACTION_TYPES from "./actionTypes";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.payload;
            return state;
        case ACTION_TYPES.SEND_MESSAGE:
            const body = state.newMessageBody;
            state.messagesData.push({
                id: 6,
                message: body
            });
            state.newMessageBody = "";
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;