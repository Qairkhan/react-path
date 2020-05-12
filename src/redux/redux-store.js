import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import {
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
} from "./reducers/";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebare: sidebarReducer,
  findUsersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export { store };
