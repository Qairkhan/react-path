import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "a0604fa4-0c31-4ca0-9017-9688060159b3" },
});

const usersAPI = {
  apiGetUsers: (currentPage = 1, pageSize = 20) => {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  apiDeleteUsers: (u) => {
    return instance.delete(`follow/${u.id}`);
  },
  apiPostUsers: (u) => {
    return instance.post(`follow/${u.id}`, {});
  },
};

export { usersAPI };
