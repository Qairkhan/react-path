import ACTION_TYPES from "./actionTypes";

const profileReducer = (state, action) => {
    switch(action.type) {
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