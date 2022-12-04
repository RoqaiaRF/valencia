import Axios from "axios";
const axios = Axios.create({
  baseURL: "https://valenci.fareza.net",
  //    headers: {
  //      "X-Requested-With": "XMLHttpRequest",
  //  },
  //   withCredentials: true,
});
export default axios;
