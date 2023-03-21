import axios from "axios";

const axiosClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://gray-hilarious-puppy.cyclic.app",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export { axiosClient };
