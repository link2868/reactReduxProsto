import { getAuthThunkCreator } from "./authReducer";

const IS_INITIALIZE = "IS_INITIALIZE";

const initialState = {
  resultInit: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_INITIALIZE: {
      return {
        ...state,
        resultInit: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const isInitialize = () => {
  return { type: IS_INITIALIZE };
};

export const initializeApp = () => {
  return (dispatch) => {
    const promise = dispatch(getAuthThunkCreator());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    // Promise.all([promise]).then(() => dispatch(isInitialize()));
    promise.then(() => dispatch(isInitialize()));
  };
};

export default appReducer;
