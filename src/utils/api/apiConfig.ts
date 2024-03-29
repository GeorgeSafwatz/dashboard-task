import axios, { AxiosInstance } from "axios";

/**
 * Axios instance configured for the exchange rates API.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.apilayer.com/exchangerates_data/",
  headers: {
    "Content-Type": "application/json",
    apiKey: "d3D7f171sFC5GK51uXcpfhxENpgS57YE",
  },
});

export default axiosInstance;
