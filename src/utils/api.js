import axios from "axios";

const northMarketPlace = axios.create({
  baseURL: "https://fe-nc-marketplace-api-1-4nom.onrender.com",
});
export function getUsers() {
  return northMarketPlace.get("/api/users").then(({ data }) => {
    return data.users[2];
  });
}
