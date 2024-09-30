import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = () => {
  return axios.get(`${BASE_URL}/users`).then((res) => {
    console.log(res, ">>>>>>res in APIS");
    return res;
  });
};
