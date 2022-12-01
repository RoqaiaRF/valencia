import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import KafeelWork from "../components/kafeelWork";
import { useParams, useNavigate } from "react-router-dom";
const Work = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
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
        await axios.post(`work`, { ...values, id });
        navigate("vehicle/" + id);
      } catch (error) {
        if (error?.response?.data?.errors) {
          setValidationsErrors(error.response.data.errors);
        }
        if (error?.response?.data) {
          setValidationsGeneral(error.response.data);
        }
      }
    },
  });
  const isKafeel = localStorage.getItem("kafeel");

  return (
    <>
      <div className="field-header">
        <h3 className="field-title"> معلومات العمل</h3>
      </div>
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group form-inline ">
            <div className="row">
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    نوع العمل: <span className="star">*</span>
                  </label>
                  <select
                    id="province_kafeel"
                    value={formik.values.province_kafeel}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="province_kafeel"
                    required=""
                  >
                    <option value="" disabled="" hidden="">
                      اختر نوع العمل
                    </option>
                    <option value="employee">موظف</option>
                    <option value="work_owner">صاحب عمل </option>
                    <option value="house_wife">ربة منزل </option>
                    <option value="other">أخري</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    جهة العمل : <span className="star">*</span>
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.region}
                    type="text"
                    className={`form-control`}
                    placeholder="جهة العمل"
                    name="region"
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    {" "}
                    الوظيفة : <span className="star">*</span>
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.region}
                    type="text"
                    className={`form-control`}
                    placeholder="الوظيفة"
                    name="region"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    هاتف العمل: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.street}
                    className={`form-control`}
                    placeholder="هاتف العمل"
                    name="text"
                    id="street"
                  />
                  <span className="errors_steps" id="mobile_error"></span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    معدل الدخل الشهري: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.landmark}
                    className={`form-control`}
                    placeholder="معدل الدخل الشهري"
                    name="text"
                    id="landmark"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="app-form">
                  <label className="control-label">مصدر دخل آخر :</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.house_number}
                    className={`form-control`}
                    placeholder="مصدر دخل آخر "
                    name="house_number"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">قيمة الدخل الآخر:</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.store_name}
                    className={`form-control`}
                    placeholder="قيمة الدخل الآخر"
                    name="store_name"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    خاضع للضمان الاجتماعي : <span className="star">*</span>
                  </label>
                  <select
                    id="province_kafeel"
                    value={formik.values.province_kafeel}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="province_kafeel"
                    required=""
                  >
                    <option value="" disabled="" hidden="">
                      اختر الاجابة
                    </option>
                    <option value="yes">نعم</option>
                    <option value="no">لا</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          {isKafeel === "1" && (
            <KafeelWork
              values={formik.values}
              handleChange={formik.handleChange}
            />
          )}
          <div className="col-md-12">
            <hr />
            <div className="py-2">
              <button
                style={{ width: 100 }}
                className="btn butt-primary nextBtn butt-lg pull-right step1_validation"
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

export default Work;
