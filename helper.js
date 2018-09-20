import axios from "axios";
import CONFIG from "./config";

export const API = axios.create({
  baseURL: `${CONFIG.BASE_URL}`
});
