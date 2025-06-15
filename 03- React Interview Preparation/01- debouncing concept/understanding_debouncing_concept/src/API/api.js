import axios from "axios";

export const apiGetAllUsers = () => {
  return axios.get("https://dummyjson.com/users");
};
