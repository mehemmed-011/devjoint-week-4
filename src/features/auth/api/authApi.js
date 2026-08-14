import axios from "axios";

let API_URL = "https://6a7c97b0a008c10e4cbf9712.mockapi.io/taskflow/api/v1/users";

export let getUserByEmail = async (email) => {
  let response = await axios.get(API_URL);

  let users = response.data;

  return (
    users.find(
      (user) => user.email.trim().toLowerCase() === email.trim().toLowerCase(),
    ) || null
  );
};

export let createUser = async (user) => {
  let response = await axios.post(API_URL, user);

  return response.data;
};