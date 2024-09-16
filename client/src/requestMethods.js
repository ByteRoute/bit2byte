import axios from "axios";

const BASE_URL = "http://localhost:8000/";
axios.defaults.withCredentials = true;

export const request = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    credentials: "include",
});
