import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api";

function Greeting() {
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
      <p>Welcome Back: {user.username}</p>
    </div>
  );
}

export default Greeting;