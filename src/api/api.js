import * as axios from "axios";

import {
  ENDPOINTS
} from "../core/constants";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a0604fa4-0c31-4ca0-9017-9688060159b3"
  },
});

const usersAPI = {
  apiGetUsers: (currentPage = 1, pageSize = 20) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  apiDeleteUsers: (u) => {
    return instance.delete(`${ENDPOINTS.FOLLOW}${u.id}`);
  },
  apiPostUsers: (u) => {
    return instance.post(`${ENDPOINTS.FOLLOW}${u.id}`, {});
  },
  getProfile: (userId) => {
    return instance.get(`${ENDPOINTS.PROFILE}` + userId);
  },
  authMe: () => {
    return instance.get(`${ENDPOINTS.AUTH_ME}`);
  },
  getStatus: (userId) => {
    return instance.get(`${ENDPOINTS.PROFILE_STATUS}` + userId);
  },
  updateStatus: (status) => {
    return instance.put(`${ENDPOINTS.PROFILE_STATUS}`, {
      status: status,
    });
  },
};

export {
  usersAPI
};