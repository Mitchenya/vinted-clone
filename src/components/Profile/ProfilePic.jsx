import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";
import { Link } from "react-router-dom";

function ProfilePic() {
  const [user, setUser] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUsers().then((data) => {
      return setUser(data[2]);
    });
  }, []);

  return (
    <div>
      <Link to='/profile'><img id='header-pic' src={user.avatar_url}></img></Link>
    </div>
  );
}

export default ProfilePic;