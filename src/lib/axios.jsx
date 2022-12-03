import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://b271-91-186-227-54.eu.ngrok.io",
  //    headers: {
  //      "X-Requested-With": "XMLHttpRequest",
  //  },
  //   withCredentials: true,
});
export default axios;
