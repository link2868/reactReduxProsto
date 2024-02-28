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

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => response.data);
  },

  postFollow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  deleteFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get("profile/" + userId).then((response) => response.data);
  },

  getProfileStatus(userId) {
    return instance
      .get("profile/status/" + userId)
      .then((response) => response.data);
  },

  putUpdateProfileStatus(status) {
    return instance
      .put("profile/status", { status: status })
      .then((response) => response.data);
  },

  putUpdatePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance
      .put("profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response.data);
  },
};

export const authApi = {
  getAuth() {
    return instance.get("auth/me").then((response) => response.data);
  },
  postLogin(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((response) => response.data);
  },

  deletetLogout() {
    return instance.delete("auth/login").then((response) => response.data);
  },
};
