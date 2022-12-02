import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import KafeelWork from "../components/kafeelWork";
import { useParams, useNavigate } from "react-router-dom";
const Work = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const isKafeel = localStorage.getItem("kafeel");
  const id = useParams().id;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      type_of_employment: "",
      employer: "",
      job: "",
      phone_work: "",
      monthly_income_rate: "",
      other_source_of_income: "",
      other_income_value: "",
      is_daman: false,
      type_of_employment_kafeel: "",
      employer_kafeel: "",
      job_kafeel: "",
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
        const {
          type_of_employment_kafeel,
          employer_kafeel,
          job_kafeel,
          phone_work_kafeel,
          monthly_income_rate_kafeel,
          other_source_of_income_kafeel,
          other_income_value_kafeel,
          is_daman_kafeel,
          ...user
        } = values;
        await axios.post(
          `work`,
          isKafeel === "1" ? { ...values, id } : { ...user, id }
        );
        navigate("/vehicle/" + id);
      } catch (error) {
        if (error?.response?.data?.message) {
          setValidationsErrors(error.response.data.message);
        }
      }
    },
  });

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
                <div
                  className={`app-form ${
                    validationsErrors.type_of_employment && "error"
                  }`}
                >
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
                    <option value="موظف">موظف</option>
                    <option value="صاحب عمل ">صاحب عمل </option>
                    <option value="ربة منزل ">ربة منزل </option>
                    <option value="أخري">أخري</option>
                  </select>
                  {validationsErrors?.type_of_employment && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.type_of_employment}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.employer && "error"
                  }`}
                >
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
                  {validationsErrors?.employer && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.employer}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-3">
                <div className={`app-form ${validationsErrors.job && "error"}`}>
                  <label className="control-label">
                    {" "}
                    الوظيفة : <span className="star">*</span>
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.job}
                    type="text"
                    className={`form-control`}
                    placeholder="الوظيفة"
                    name="job"
                  />
                  {validationsErrors?.job && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.job}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.phone_work && "error"
                  }`}
                >
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
                  {validationsErrors?.phone_work && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.phone_work}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.monthly_income_rate && "error"
                  }`}
                >
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
                  {validationsErrors?.monthly_income_rate && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.monthly_income_rate}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-2">
                <div
                  className={`app-form ${
                    validationsErrors.other_source_of_income && "error"
                  }`}
                >
                  <label className="control-label">مصدر دخل آخر :</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.other_source_of_income}
                    className={`form-control`}
                    placeholder="مصدر دخل آخر "
                    name="other_source_of_income"
                  />
                  {validationsErrors?.other_source_of_income && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.other_source_of_income}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.other_income_value && "error"
                  }`}
                >
                  <label className="control-label">قيمة الدخل الآخر:</label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.other_income_value}
                    className={`form-control`}
                    placeholder="قيمة الدخل الآخر"
                    name="other_income_value"
                  />
                  {validationsErrors?.other_income_value && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.other_income_value}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.is_daman && "error"
                  }`}
                >
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
                    <option value="1">نعم</option>
                    <option value="0">لا</option>
                  </select>
                  {validationsErrors?.is_daman && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.is_daman}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isKafeel === "1" && (
            <KafeelWork
              values={formik.values}
              handleChange={formik.handleChange}
              validationsErrors={validationsErrors}
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
