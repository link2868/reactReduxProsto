import user1 from "../img/avatar/girl-ava02.png";
import user2 from "../img/avatar/boy-ava01.png";
import user3 from "../img/avatar/boy-ava03.png";
import user4 from "../img/avatar/girl-ava01.png";
import user5 from "../img/avatar/uaBoy.jpg";

import profilePostsReducer from "./profilePostsReducer";
import dialogsMessagesReducer from "./dialogsMessagesReducer";

let store = {
  _state: {
    profilePostsPage: {
      posts: [
        { id: 1, message: "Я вивчаю React", likesCount: 5 },
        { id: 2, message: "Сподіваюся, що все вийде", likesCount: 3 },
        { id: 3, message: " Як у Вас? ", likesCount: 0 },
        { id: 4, message: " Що нового?", likesCount: 0 },
      ],
      newPostText: "",
    },

    dialogsMessagesPage: {
      dialogs: [
        { id: 1, name: "Lina", avatar: user1 },
        { id: 2, name: "Vadik", avatar: user2 },
        { id: 3, name: "Misha", avatar: user3 },
        { id: 4, name: "Lilya", avatar: user4 },
        { id: 5, name: "Oleg", avatar: user5 },
      ],
      messages: [
        { id: 1, message: "Я вивчаю React" },
        { id: 2, message: "Як успіхи?" },
        { id: 3, message: "У тебе все вийде!" },
        { id: 4, message: "І я поїду на Мальдіви!" },
      ],
      newMessageText: "",
    },

    sitebar: {
      friends: [
        { id: 1, name: "Lina", avatar: user1 },
        { id: 2, name: "Vadik", avatar: user2 },
        { id: 3, name: "Misha", avatar: user3 },
      ],
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    console.log(observer);
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePostsPage = profilePostsReducer(
      this._state.profilePostsPage,
      action
    );
    this._state.dialogsMessagesPage = dialogsMessagesReducer(
      this._state.dialogsMessagesPage,
      action
    );

    this._callSubscriber(this._state);
  },
};

export default store;
