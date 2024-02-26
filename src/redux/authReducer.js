import { profileApi, authApi } from "../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";
const SET_PHOTO_USER = "SET_PHOTO_USER";

const initialState = {
  id: NaN,
  login: NaN,
  email: NaN,
  resultAuth: false,
  photos: NaN,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        ...action.data,
        resultAuth: true,
        photos: action.photos,
      };
    }
    case SET_PHOTO_USER: {
      return {
        ...state,
        photos: action.photos,
      };
    }
    default: {
      return state;
    }
  }
};

export const setPhotoUser = (photos) => {
  return { type: SET_PHOTO_USER, photos };
};

export const setAuthUser = (id, login, email) => {
  return { type: SET_AUTH_USER, data: { id, login, email } };
};

// export const setAuthUser = (data) => {
//   return { type: SET_AUTH_USER, data: data };
// };

export const getAuthThunkCreator = () => {
  return (dispatch) => {
    authApi
      .getAuth()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          dispatch(setAuthUser(id, login, email));
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

export default authUserReducer;
