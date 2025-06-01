import axios from "axios";

const axiosInstance = axios.create({

  //local instance of firebase
  // baseURL: "http://127.0.0.1:5001/clone-12d63/us-central1/api",
  //deployed version of amazon on render
  baseURL: "https://amazon-6qcy.onrender.com/",
});

export { axiosInstance };
