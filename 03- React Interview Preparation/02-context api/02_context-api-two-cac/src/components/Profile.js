import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div>
        <h3>Please login</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Welcome {user.username}</h3>
    </div>
  );
}

export default Profile;
