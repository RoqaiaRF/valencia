import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://46aa-91-186-232-94.eu.ngrok.io/",
  //    headers: {
  //      "X-Requested-With": "XMLHttpRequest",
  //  },
  //   withCredentials: true,
});
export default axios;
