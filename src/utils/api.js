import axios from "axios";
import React from "react";
import ShrekCity from "../components/ErrorPage/ErrorPage";
import { Redirect } from "react-router-dom";
import { useRouteError } from "react-router-dom";

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

export function getItemById(id) {
  return northMarketPlace
    .get(`/api/items/${id}`)
    .then(({ data }) => {
      return data.item;
    })
    .catch((isError) => {
      return <Redirect to="/404" />;
    });
}
