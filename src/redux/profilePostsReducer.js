import { profileApi } from "../api/api";

const ADD_POST = "ADD-PROFILE-POST";
// const UPDATE_POST = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_PHOTO = "SET_PHOTO";
const DEL_POST = "DEL_POST";

const initialState = {
  posts: [
    { id: 1, message: "Я вивчаю React", likesCount: 5 },
    { id: 2, message: "Сподіваюся, що все вийде", likesCount: 3 },
    { id: 3, message: " Як справи? ", likesCount: 0 },
    { id: 4, message: " Що нового?", likesCount: 0 },
  ],
  // newPostText: "",
  profile: null,
  status: "",
};

const profilePostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: "",
      };
    }
    case DEL_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.idPost),
      };
    }
    // case UPDATE_POST: {
    //   return {
    //     ...state,
    //     newPostText: action.newText,
    //   };
    // }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default: {
      return state;
    }
  }
};

export const addProfilePostActionCreator = (newPost) => {
  return { type: ADD_POST, newPost };
};

// export const updateNewPostTextActionCreator = (text) => {
//   return { type: UPDATE_POST, newText: text };
// };
export const deletePost = (idPost) => {
  return { type: DEL_POST, idPost };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const setUpdatePhoto = (photos) => {
  return {
    type: SET_PHOTO,
    photos,
  };
};

export const setUserProfileThunkCreator = (userId) => {
  return (dispatch) => {
    profileApi.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileApi.getProfileStatus(userId).then((status) => {
      dispatch(setUserStatus(status));
    });
  };
};

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileApi.putUpdateProfileStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

export const savePhoto = (file) => {
  return (dispatch) => {
    profileApi.putUpdatePhoto(file).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setUpdatePhoto(data.data.photos));
      }
    });
  };
};

export default profilePostsReducer;
