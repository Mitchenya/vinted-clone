import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      return setUser(data);
    });
  }, []);

  return (
    <div>
      {user.slice(1, 2).map((user, index) => {
        return (
          <div key={index}>
            <img id="profile-pic" src={user.avatar_url} />
            <p>Username: {user.username}</p>
            <p>Kudos: {user.kudos}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
