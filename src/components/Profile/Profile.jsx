import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";

function Profile() {
  const [user, setUser] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsers().then((data) => {
      return setUser(data);
    });
  }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>{user.username}</p>
    </div>
  );
}

export default Profile;
