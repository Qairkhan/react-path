import ACTION_TYPES from "../actionTypes";

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FOLLOW_TO_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case ACTION_TYPES.UNFOLLOW_TO_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.payload) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case ACTION_TYPES.SET_USERS: {
      return { ...state, users: action.payload };
    }

    case ACTION_TYPES.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.payload };
    }

    case ACTION_TYPES.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.payload };
    }

    case ACTION_TYPES.TOGGLE_IS_FETCHINE: {
      return { ...state, isFetching: action.payload };
    }

    default:
      return state;
  }
};

export { usersReducer };
