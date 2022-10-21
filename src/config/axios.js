import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://dev-mercurycash.us",
  timeout: 5000
});

export default instanceAxios