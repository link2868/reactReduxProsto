import { api } from "../api/api";

const ADD_POST = "ADD-PROFILE-POST";
const UPDATE_POST = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "Я вивчаю React", likesCount: 5 },
    { id: 2, message: "Сподіваюся, що все вийде", likesCount: 3 },
    { id: 3, message: " Як справи? ", likesCount: 0 },
    { id: 4, message: " Що нового?", likesCount: 0 },
  ],
  newPostText: "",
  profile: null,
};

const profilePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case UPDATE_POST: {
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default: {
      return state;
    }
  }
};

export const addProfilePostActionCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_POST, newText: text };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    api.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profilePostsReducer;
