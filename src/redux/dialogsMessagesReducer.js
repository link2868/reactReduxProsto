import user1 from "../img/avatar/girl-ava02.png";
import user2 from "../img/avatar/boy-ava01.png";
import user3 from "../img/avatar/boy-ava03.png";
import user4 from "../img/avatar/girl-ava01.png";
import user5 from "../img/avatar/uaBoy.jpg";

const ADD_MESSAGE = "ADD-MESSAGES-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE-TEXT";

const initialState = {
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
};

const dialogsMessagesReducer = (state = initialState, action) => {
  // const stateNew = {
  //   ...state,
  //   // messages: [...state.messages],
  // };

  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_MESSAGE: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    default: {
      return state;
    }
  }
};

export const addMessagesMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateMessageTextActionCreator = (text) => {
  return { type: UPDATE_MESSAGE, newText: text };
};

export default dialogsMessagesReducer;
