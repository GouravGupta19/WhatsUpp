import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials:true,
});

//withCredentials:true , so that we can send cookies with every request
// so that the server can access those cookies
