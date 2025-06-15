import react, { useEffect, useState } from "react";
import { getAllUsers } from "../allFunctions/users";

export default function AllUsers() {
  const [allUsersList, setAllUsersList] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let allUsers = await getAllUsers(); // Wait for the promise to resolve
        setAllUsersList(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  console.log(allUsersList, ">>>>>>>>>>>allUsersList");
  return (
    <div>
      <h3>All Users</h3>
      <ul>
        {allUsersList.map((obj) => {
          return <li>{obj.lastName}</li>;
        })}
      </ul>
    </div>
  );
}
