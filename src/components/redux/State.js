import {rerenderEntireTree} from '../../render'

const state = { 
  ProfilePage: {
    postsData: [
      { id: 1, message: "anti-mage the best", likesCount: 9343 },
      { id: 2, message: "Salem alem", likesCount: 9333 },
      { id: 3, message: "asdasd" },
      { id: 4, message: "asdasd" },
      { id: 5, message: "asdasdasd" }
    ],
    newPostText: 'testtesttest'
  },
  MessagePage: {
    messagesData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Salem alem" },
      { id: 3, message: "4to tam" },
      { id: 4, message: "Da nu" },
      { id: 5, message: "Realno?" }
    ]
  },
  DialogPage: {
    usersData: [
    { id: 1, name: "Mukha" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Belyi" },
    { id: 4, name: "Mysyk" },
    { id: 5, name: "Alina" }
  ]
    }
};

const addPost = () => {
    let newPost = {
      id: 5,
      message: state.ProfilePage.newPostText , 
      likesCount: 0
    };
    state.ProfilePage.postsData.push(newPost);
    state.ProfilePage.newPostText = ('');
    rerenderEntireTree(state);
  };

  const updateNewpostText = (newText) => {
    state.ProfilePage.newPostText = newText;
    rerenderEntireTree(state);
  }
export {state,addPost, updateNewpostText};