import axios from "axios";

let API_URL = "http://localhost:3000/tasks";

export let getTasks = async () => {
  let response = await axios.get(API_URL);

  return response.data;
};

export let createTask = async (task) => {
  let response = await axios.post(API_URL, task);

  return response.data;
};

export let updateTask = async (id, task) => {
  let response = await axios.patch(`${API_URL}/${id}`, task);

  return response.data;
};

export let deleteTask = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
