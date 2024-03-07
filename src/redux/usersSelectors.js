export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsPreloader = (state) => {
  return state.usersPage.isPreloader;
};

export const getIsEnabled = (state) => {
  return state.usersPage.isEnabled;
};

export const getResultAuth = (state) => {
  return state.authUser.resultAuth;
};
