import ACTION_TYPES from "./actionTypes";

const addPostCreator = () => {
    return {
        type: ACTION_TYPES.ADD_POST,
    };
};

const updateNewPostTextCreator = (payload) => {
    return {
        type: ACTION_TYPES.UPDATE_NEW_POST_TEXT,
        payload,
    };
};



export {addPostCreator, updateNewPostTextCreator};