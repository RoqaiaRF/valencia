import Axios from "axios";
const axios = Axios.create({
  baseURL: "http://valenci.fareza.net/",
  //    headers: {
  //      "X-Requested-With": "XMLHttpRequest",
  //  },
  //   withCredentials: true,
});
export default axios;
