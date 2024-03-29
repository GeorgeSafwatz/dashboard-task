import axios, { AxiosInstance } from "axios";

/**
 * Axios instance configured for the exchange rates API.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    "Content-Type": "application/json",
    apiKey: "U3WUWXt0vAd3Tz4hsgLNqKYfQDcAB90K",
  },
});

export default axiosInstance;
