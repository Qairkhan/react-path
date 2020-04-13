import ACTION_TYPES from "./actionTypes";

const initialState = {
  users: [
    {
      id: 1,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: true,
      fullNAme: "Ratata",
      status: "Dota1 rurez",
      location: { city: "Astana", country: "KZ" },
    },
    {
      id: 2,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: true,
      fullNAme: "Patata",
      status: "Dota2 rurez",
      location: { city: "Semsk", country: "KZ" },
    },
    {
      id: 3,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: false,
      fullNAme: "Katata",
      status: "Dota3 rurez",
      location: { city: "Nurs", country: "KZ" },
    },
    {
      id: 4,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: false,
      fullNAme: "Satata",
      status: "Dota4 rurez",
      location: { city: "Bars", country: "KZ" },
    },
    {
      id: 5,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: false,
      fullNAme: "Batata",
      status: "Dota5 rurez",
      location: { city: "Jars", country: "KZ" },
    },
    {
      id: 6,
      avatarUrl:
        "https://gamepedia.cursecdn.com/dota2_gamepedia/c/c8/Ghost_Walk_icon.png?version=4587b45bd735ddf458a127fe2582236f",
      followed: false,
      fullNAme: "Tatata",
      status: "Dota6 rurez",
      location: { city: "Ata", country: "KZ" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FOLLOW_TO_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case ACTION_TYPES.UNFOLLOW_TO_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case ACTION_TYPES.SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export default usersReducer;
