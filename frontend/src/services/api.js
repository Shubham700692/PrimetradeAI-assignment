// import axios from "axios";

// const API = axios.create({
//   baseURL: "https://primetradeai-assignment-wyeu.onrender.com/api/v1"
// });

// API.interceptors.request.use((req) => {

//   const token = localStorage.getItem("token");

//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }

//   return req;
// });

// export default API;
// src/services/api.js
import axios from "axios";

// Create axios instance pointing to deployed backend
const API = axios.create({
  baseURL: "https://primetradeai-assignment-wyeu.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically if present
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// -------------------- Auth Endpoints --------------------
export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (loginData) => API.post("/auth/login", loginData);

// -------------------- Task Endpoints --------------------
export const getTasks = () => API.get("/tasks");
export const createTask = (taskData) => API.post("/tasks", taskData);
export const updateTask = (id, taskData) => API.put(`/tasks/${id}`, taskData);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

// Export the raw API instance if needed elsewhere
export default API;