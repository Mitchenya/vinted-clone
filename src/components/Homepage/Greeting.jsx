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
      {user.slice(2, 3).map((user, index) => {
        return (
          <div key={index}>
            <h3>Welcome Back {user.username}!</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Greeting;
