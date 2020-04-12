import ACTION_TYPES from "./actionTypes";

const initialState = {
    postsData: [
        { id: 1, message: "anti-mage the best", likesCount: 9343 },
        { id: 2, message: "Salem alem", likesCount: 9333 },
        { id: 3, message: "asdasd" },
        { id: 4, message: "asdasd" },
        { id: 5, message: "asdasdasd" },
      ],
      newPostText: "test"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case ACTION_TYPES.UPDATE_NEW_POST_TEXT:
            state.newPostText = action.payload;
            return state;
        default:
            return state;
    }
}

export default profileReducer;