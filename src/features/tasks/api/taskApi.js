import axios from "axios";

let API_URL = "https://6a7c97b0a008c10e4cbf9712.mockapi.io/taskflow/api/v1/tasks";

export let getTasks = async (userId) => {
  let response = await axios.get(API_URL);

  let tasks = response.data;

  return tasks.filter((task) => String(task.userId) === String(userId));
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
