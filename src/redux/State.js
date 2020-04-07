import ACTION_TYPES from "./actionTypes";

import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from "./sidebarReducer"

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
    Sidebar: {

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

    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action);
    this._state.Sidebar = sidebarReducer(this._state.Sidebar, action);
    
    this._callSubscriber(this._state);
    }
  
};

export { store };
window.store = store;
