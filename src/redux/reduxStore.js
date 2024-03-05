import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";

import profilePostsReducer from "./profilePostsReducer";
import dialogsMessagesReducer from "./dialogsMessagesReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authUserReducer from "./authReducer";
import appReducer from "./appReducer";

import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  profilePostsPage: profilePostsReducer,
  dialogsMessagesPage: dialogsMessagesReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  authUser: authUserReducer,
  form: formReducer,
  app: appReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
