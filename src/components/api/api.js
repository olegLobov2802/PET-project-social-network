import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "d49a8798-dec3-4d6f-92f0-d0cc17fdc7e7" },
});

export const usersAPI = {
  getUsers(usersCount, currentPage) {
    return instance.get(`users?count=${usersCount}&page=${currentPage}`).then(response => response.data)
  },
};
