import { combineReducers, legacy_createStore as createStore } from "redux";

import profilePostsReducer from "./profilePostsReducer";
import dialogsMessagesReducer from "./dialogsMessagesReducer";
import sitebarReducer from "./sitebarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profilePostsPage: profilePostsReducer,
  dialogsMessagesPage: dialogsMessagesReducer,
  sitebar: sitebarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
