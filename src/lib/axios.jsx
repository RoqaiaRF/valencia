import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://9fcb-5-45-132-8.eu.ngrok.io/",
//    headers: {
//      "X-Requested-With": "XMLHttpRequest",
//  },
//   withCredentials: true,
});
export default axios;
