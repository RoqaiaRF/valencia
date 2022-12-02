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
      type_of_employment: "",
      employer: "",
      jop: "",
      phone_work: "",
      monthly_income_rate: "",
      other_source_of_income: "",
      other_income_value: "",
      is_daman: false,
      type_of_employment_kafeel: "",
      employer_kafeel: "",
      jop_kafeel: "",
      phone_work_kafeel: "",
      monthly_income_rate_kafeel: "",
      other_source_of_income_kafeel: "",
      other_income_value_kafeel: "",
      is_daman_kafeel: false,
    },
    initialErrors: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setValidationsErrors({});
        await axios.post(`work`, { ...values, id });
        navigate("/vehicle/" + id);
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
                    id="type_of_employment"
                    value={formik.values.type_of_employment}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="type_of_employment"
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
                    value={formik.values.employer}
                    type="text"
                    className={`form-control`}
                    placeholder="جهة العمل"
                    name="employer"
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
                    value={formik.values.jop}
                    type="text"
                    className={`form-control`}
                    placeholder="الوظيفة"
                    name="jop"
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
                    value={formik.values.phone_work}
                    className={`form-control`}
                    placeholder="هاتف العمل"
                    name="phone_work"
                    id="phone_work"
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
                    value={formik.values.monthly_income_rate}
                    className={`form-control`}
                    placeholder="معدل الدخل الشهري"
                    name="monthly_income_rate"
                    id="monthly_income_rate"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="app-form">
                  <label className="control-label">مصدر دخل آخر :</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.other_source_of_income}
                    className={`form-control`}
                    placeholder="مصدر دخل آخر "
                    name="other_source_of_income"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">قيمة الدخل الآخر:</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.other_income_value}
                    className={`form-control`}
                    placeholder="قيمة الدخل الآخر"
                    name="other_income_value"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="app-form">
                  <label className="control-label">
                    خاضع للضمان الاجتماعي : <span className="star">*</span>
                  </label>
                  <select
                    id="is_daman"
                    value={formik.values.is_daman}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="is_daman"
                    required=""
                  >
                    <option value="" disabled="" hidden="">
                      اختر الاجابة
                    </option>
                    <option value="true">نعم</option>
                    <option value="false">لا</option>
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
