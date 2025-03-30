import { apiGetAllUsers } from "../API/api";

export const getAllUsers = async () => {
  try {
    let allUsersList = await apiGetAllUsers();
    let userList = allUsersList?.data?.users;
    return userList;
  } catch (err) {
    console.log(`ERROR; ${err.message}`);
  }
};
