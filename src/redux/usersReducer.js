import ACTION_TYPES from "./actionTypes";

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
      return { ...state, users: action.users };
    }

    case ACTION_TYPES.SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case ACTION_TYPES.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case ACTION_TYPES.TOGGLE_IS_FETCHINE: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
};

export default usersReducer;
