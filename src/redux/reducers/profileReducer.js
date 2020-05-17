import ACTION_TYPES from "../actionTypes";

const initialState = {
  postsData: [
    { id: 1, message: "anti-mage the best", likesCount: 9343 },
    { id: 2, message: "Salem alem", likesCount: 9333 },
    { id: 3, message: "asdasd" },
    { id: 4, message: "asdasd" },
    { id: 5, message: "asdasdasd" },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }

    case ACTION_TYPES.DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.postId != action.postId),
      };
    }

    case ACTION_TYPES.SAVE_PHOTO_SUC: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos }),
      };
    }

    case ACTION_TYPES.SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case ACTION_TYPES.SET_STATUS: {
      return {
        ...state,
        status: action.payload,
      };
    }
    default:
      return state;
  }
};

export {profileReducer};
