import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;

export let getTasks = async (userId) => {
  let response = await axios.get(`${API_URL}/users/${userId}/tasks`);

  return response.data;
};

export let createTask = async (userId, task) => {
  let response = await axios.post(`${API_URL}/users/${userId}/tasks`, task);

  return response.data;
};

export let updateTask = async (userId, taskId, task) => {
  let response = await axios.put(
    `${API_URL}/users/${userId}/tasks/${taskId}`,
    task,
  );

  return response.data;
};

export let deleteTask = async (userId, taskId) => {
  await axios.delete(`${API_URL}/users/${userId}/tasks/${taskId}`);
};
