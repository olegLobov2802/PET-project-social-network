import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "d49a8798-dec3-4d6f-92f0-d0cc17fdc7e7" },
});

export const usersAPI = {
  getUsers(usersCount, currentPage) {
    return instance
      .get(`users?count=${usersCount}&page=${currentPage}`)
      .then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data.resultCode);
  },
  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data.resultCode);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};
