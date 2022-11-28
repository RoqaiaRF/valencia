import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
const Address = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
  const [files, setFiles] = useState(null);
  async function send() {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("files", files);
      const res = await axios.post("uploadfile", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 200) {
        alert("success");
      }
    } catch (error) {}
  }
  return (
    <>
      <input
        type="file"
        onChange={(e) => setFiles(e.target.files[0])}
        multiple
      />
      <button onClick={send}>wdksd</button>
    </>
  );
};

export default Address;
