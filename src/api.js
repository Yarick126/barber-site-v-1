import Cookies from "js-cookie";
import axios from "axios";
import { TOKEN } from "./constants";

export const $axios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get(TOKEN)}`
  }
})