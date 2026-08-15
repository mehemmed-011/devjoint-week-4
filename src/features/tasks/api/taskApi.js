import axios from "axios";

let API_URL = "https://6a7c97b0a008c10e4cbf9712.mockapi.io/taskflow/api/v1";

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
