import axios from "axios";

const northMarketPlace = axios.create({
  baseURL: "https://fe-nc-marketplace-api-1-4nom.onrender.com",
});
export function getUsers() {
  return northMarketPlace.get("/api/users").then(({ data }) => {
    return data.users;
  });
}

export function getItems() {
  return northMarketPlace.get("/api/items").then(({ data }) => {
    return data.items;
  });
}
getItems();