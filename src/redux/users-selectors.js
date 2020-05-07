import { createSelector } from "reselect";

const getUsers = (state) => {
  return state.findUsersPage.users;
};

const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)
}

const getUsersWithReselect = createSelector((users) => {
  users.filter(u => true);
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
