import { combineReducers, legacy_createStore as createStore } from "redux";

import profilePostsReducer from "./profilePostsReducer";
import dialogsMessagesReducer from "./dialogsMessagesReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";
import authUserReducer from "./authReducer";

const reducers = combineReducers({
  profilePostsPage: profilePostsReducer,
  dialogsMessagesPage: dialogsMessagesReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
  authUser: authUserReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
