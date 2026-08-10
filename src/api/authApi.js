import axios from "axios";

let API_URL = "http://localhost:3000/users";

export let getUserByEmail = async (email) => {
  let response = await axios.get(API_URL, {
    params: {
      email: email.trim().toLowerCase(),
    },
  });

  return response.data[0] || null;
};

export let createUser = async (user) => {
  let response = await axios.post(API_URL, user);

  return response.data;
};