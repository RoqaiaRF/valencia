import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://8652-5-45-134-252.eu.ngrok.io/",
  //    headers: {
  //      "X-Requested-With": "XMLHttpRequest",
  //  },
  //   withCredentials: true,
});
export default axios;
