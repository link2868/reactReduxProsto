import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  header: {
    "API-KEY": "42daf599-7cd2-481e-a6fc-637aedcf77f8",
  },
});

// export const getUsers = (currentPage, pageSize) => {
//   return instance
//     .get(`users?page=${currentPage}&count=${pageSize}`, {})
//     .then((response) => response.data);
// };

export const api = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },

  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => response.data);
  },

  getAuth() {
    return instance.get("auth/me").then((response) => response.data);
  },

  postFollow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  deleteFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};
