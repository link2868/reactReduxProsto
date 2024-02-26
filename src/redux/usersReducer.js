import { usersApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";
const SETPAGE = "SETPAGE";
const SETTOTALCOUNT = "SETTOTSLCOUNT";
const IS_PRELOADER = "IS_PRELOADER";
const IS_ENABLED = "IS_ENABLED";

// const initialState = {
//   users: [
//     {
//       id: 1,
//       photos: url,
//       followed: true,
//       name: "Lina",
//       status: "Concept Artist, Illustrator, Ornaments lover",
//       location: { country: "Poland", city: "Warsaw" },
//     },
//     {
//       id: 2,
//       photos: url,
//       followed: false,
//       name: "Vadik",
//       status: "Concept Artist, team lead",
//       location: { country: "Poland", city: "Warsaw" },
//     },
//     {
//       id: 3,
//       photos: url,
//       followed: true,
//       name: "Misha",
//       status: "web developer",
//       location: { country: "Ukraine", city: "Ivano-Frankivsk" },
//     },
//     {
//       id: 4,
//       photos: url,
//       followed: false,
//       name: "Oleg",
//       status: "engineer",
//       location: { country: "Ukraine", city: "Tlumach" },
//     },
//   ],
// };

const initialState = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 1,
  isPreloader: false,
  isEnabled: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    }
    case SETUSERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }
    case SETPAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SETTOTALCOUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case IS_PRELOADER: {
      return {
        ...state,
        isPreloader: action.isPreloader,
      };
    }
    case IS_ENABLED: {
      return {
        ...state,
        isEnabled: action.enable
          ? [...state.isEnabled, action.id]
          : state.isEnabled.filter((id) => {
              return id !== action.id;
            }),
      };
    }
    default: {
      return state;
    }
  }
};

export const follow = (userId) => {
  return { type: FOLLOW, userId };
};

export const unFollow = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsers = (users) => {
  return { type: SETUSERS, users };
};

export const setPage = (currentPage) => {
  return { type: SETPAGE, currentPage };
};

export const setTotalUsersCount = (totalCount) => {
  return { type: SETTOTALCOUNT, count: totalCount };
};

export const setPreloader = (isPreloader) => {
  return { type: IS_PRELOADER, isPreloader };
};

export const setEnable = (enable, id) => {
  return { type: IS_ENABLED, enable, id };
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setPreloader(true));

    usersApi.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setPreloader(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setEnable(true, userId));
    dispatch(setPreloader(true));
    usersApi.postFollow(userId).then((data) => {
      dispatch(setPreloader(false));
      if (data.resultCode === 0) {
        dispatch(follow(userId));
      }
      dispatch(setEnable(false, userId));
    });
  };
};

export const unFollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setEnable(true, userId));
    dispatch(setPreloader(true));
    usersApi.deleteFollow(userId).then((data) => {
      dispatch(setPreloader(false));
      if (data.resultCode === 0) {
        dispatch(unFollow(userId));
      }
      dispatch(setEnable(false, userId));
    });
  };
};

export default usersReducer;
