import ACTION_TYPES from "./actionTypes";

const store = {
  _state: {
    ProfilePage: {
      postsData: [
        { id: 1, message: "anti-mage the best", likesCount: 9343 },
        { id: 2, message: "Salem alem", likesCount: 9333 },
        { id: 3, message: "asdasd" },
        { id: 4, message: "asdasd" },
        { id: 5, message: "asdasdasd" },
      ],
      newPostText: "testtesttest",
    },
    DialogsPage: {
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
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    console.log("action", action);
    if (action.type === ACTION_TYPES.ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.ProfilePage.newPostText,

        likesCount: 0,
      };

      this._state.ProfilePage.postsData.push(newPost);
      this._state.ProfilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === ACTION_TYPES.UPDATE_NEW_POST_TEXT) {
      this._state.ProfilePage.newPostText = action.payload;
      this._callSubscriber(this._state);
    } else if (action.type === ACTION_TYPES.UPDATE_NEW_MESSAGE_BODY) {
      this._state.DialogsPage.newMessageBody = action.payload;
      this._callSubscriber(this._state);
    } else if (action.type === ACTION_TYPES.SEND_MESSAGE) {
      let body = this._state.DialogsPage.newMessageBody;
      this._state.DialogsPage.messagesData.push({ id: 5, message: body });
      this._callSubscriber(this._state);
    }
  },
};

export { store };
window.store = store;
