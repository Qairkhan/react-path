import * as axios from "axios";

import { ENDPOINTS } from "../core/constants";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "456dba4f-55ea-4151-ac32-ffafe9c61a25",
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
  authLogin: (email, password, rememberMe = false) => {
    return instance.post(`${ENDPOINTS.AUTH_LOGIN}`, {
      email,
      password,
      rememberMe,
    });
  },
  authLogout: () => {
    return instance.post(`${ENDPOINTS.AUTH_LOGOUT}`);
  },
  getStatus: (userId) => {
    return instance.get(`${ENDPOINTS.PROFILE_STATUS}` + userId);
  },
  savePhoto: (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`${ENDPOINTS.PROFILE_PHOTO}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  updateStatus: (status) => {
    return instance.put(`${ENDPOINTS.PROFILE_STATUS}`, {
      status: status,
    });
  },
};

export { usersAPI };
