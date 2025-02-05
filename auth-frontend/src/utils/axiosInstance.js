import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Change this if your backend URL is different
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
