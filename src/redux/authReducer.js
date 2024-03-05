import { stopSubmit } from "redux-form";
import { profileApi, authApi } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_PHOTO_USER = "SET_PHOTO_USER";
// const SET_ERROR_MESSAGE_AUTH = "SET_ERROR_MESSAGE_AUTH";

const initialState = {
  id: NaN,
  login: NaN,
  email: NaN,
  resultAuth: false,
  // messageErrorAuth: [],
  photos: NaN,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        ...action.data,
        photos: action.photos,
      };
    }
    case SET_PHOTO_USER: {
      return {
        ...state,
        photos: action.photos,
      };
    }
    // case SET_ERROR_MESSAGE_AUTH: {
    //   return {
    //     ...state,
    //     messageErrorAuth: action.messages,
    //   };
    // }
    default: {
      return state;
    }
  }
};

export const setPhotoUser = (photos) => {
  return { type: SET_PHOTO_USER, photos };
};

export const setAuthUser = (id, login, email, resultAuth) => {
  return { type: SET_AUTH_USER, data: { id, login, email, resultAuth } };
};

// export const setErrorMessageAuth = (messages) => {
//   return { type: SET_ERROR_MESSAGE_AUTH, messages };
// };

// export const setAuthUser = (data) => {
//   return { type: SET_AUTH_USER, data: data };
// };

export const getAuthThunkCreator = () => {
  return (dispatch) => {
    return authApi
      .getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUser(id, login, email, true));
          // this.props.setAuthUser(response.data.data);
          return id;
        }
      })
      .then((id) => {
        profileApi.getProfile(id).then((data) => {
          dispatch(setPhotoUser(data.photos.small));
        });
      });
  };
};

export const postFormLogin = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.postLogin(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthThunkCreator());
      } else {
        dispatch(stopSubmit("login", { _error: data.messages[0] }));
      }
    });
  };
};

export const deleteFormLogout = () => {
  return (dispatch) => {
    authApi.deletetLogout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false));
      }
    });
  };
};

export default authUserReducer;
