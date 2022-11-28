import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
const Address = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
  const formik = useFormik({
    initialValues: {
      first_name: "",
      first_name_kafeel: "",
      second_name: "",
      second_name_kafeel: "",
      third_name: "",
      third_name_kafeel: "",
      last_name: "",
      last_name_kafeel: "",

    },
    isInitialValid: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setValidationsErrors({});
        const res = await axios.post(`info`, values);
        // Authentication was successful.
        if (res.status === 200) {
          console.log("p");
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          setValidationsErrors(error.response.data.errors);
        }
        if (error.response && error.response.data) {
          setValidationsGeneral(error.response.data);
        }
      }
    },
  });
  return (
    <>
      <div className="field-header">
        <h3 className="field-title"> عنوان المدين</h3>
      </div>
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group form-inline ">
            <div className="row">
             
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                  المحافظة : <span className="star">*</span>
                  </label>
                  <select
                    id="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="gender"
                    required=""
                  >
                    <option selected="" disabled="" hidden="">
                      اختر المحافظة
                    </option>
                    <option value="Amman">عمان</option>
                    <option value="Sanaa">الصنعاء</option>
                  </select>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">اسم المنطقة :</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.number_doc}
                    type="text"
                    className="form-control"
                    placeholder="اسم المنطقة"
                    name="number_doc"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="app-form">
                  <label className="control-label">
                  اسم الشارع: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="اسم الشارع"
                    name="text"
                    id="mobile_number"
                  />
                  <span className="errors_steps" id="mobile_error"></span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                  أقرب معلم: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="أقرب معلم"
                    name="text"
                    id="mobile_number"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="app-form">
                  <label className="control-label">
                  رقم المنزل: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="رقم المنزل"
                    name="number"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                   اسم المعرض: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="اسم المعرض"
                    name="text"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">
                   اسم الموظف الذي تواصل معك: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="اسم الموظف الذي تواصل معك"
                    name="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <hr />
            <div className="py-2">
              <button
                style={{ width: 100 }}
                class="btn butt-primary nextBtn butt-lg pull-right step1_validation"
                id="otp"
              >
                التالي
              </button>
            </div>
          </div>
        </form>
      </Spin>
    </>
  );
};

export default Address;
