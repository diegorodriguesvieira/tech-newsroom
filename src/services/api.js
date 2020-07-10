import axios from "axios";

const baseURL = "https://www.mocky.io/v2/";

export default axios.create({
  baseURL,
  timeout: 10000,
  responseType: "json",
});
