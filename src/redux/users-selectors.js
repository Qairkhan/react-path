import { createSelector } from "reselect";

const getUsers = (state) => {
  return state.findUsersPage.users;
};

const getUsersWithReselect = createSelector(() => {
  state.findUsersPage.users;
});

const getPageSize = (state) => {
  return state.findUsersPage.pageSize;
};

const getTotalUsersCount = (state) => {
  return state.findUsersPage.totalUsersCount;
};

const getCurrentPage = (state) => {
  return state.findUsersPage.currentPage;
};

const getIsFetching = (state) => {
  return state.findUsersPage.isFetching;
};

export {
  getUsersWithReselect,
  getUsers,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
};
