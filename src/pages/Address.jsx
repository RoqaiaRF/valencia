import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import KafeelAddress from "../components/kafeelAddress";
import { useParams, useNavigate } from "react-router-dom";
const Address = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();

  const isKafeel = localStorage.getItem("kafeel");
  const formik = useFormik({
    initialValues: {
      province: "",
      region: "",
      street: "",
      landmark: "",
      house_number: "",
      store_name: "",
      employee_name: "",
      province_kafeel: "",
      region_kafeel: "",
      street_kafeel: "",
      landmark_kafeel: "",
      house_number_kafeel: "",
    },
    initialErrors: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setValidationsErrors({});
        const {
          province_kafeel,
          region_kafeel,
          street_kafeel,
          landmark_kafeel,
          house_number_kafeel,
          ...user
        } = values;
        await axios.post(
          `address`,
          isKafeel === "1" ? { ...values, id } : { ...user, id }
        );
        navigate("/work/" + id);
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
        <h3 className="field-title"> عنوان المدين</h3>
      </div>
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group form-inline ">
            <div className="row">
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.province && "error"
                  }`}
                >
                  <label className="control-label">
                    المحافظة : <span className="star">*</span>
                  </label>
                  <select
                    id="province"
                    value={formik.values.province}
                    onChange={formik.handleChange}
                    className={`form-control`}
                    name="province"
                    required=""
                  >
                    <option value="" disabled="" hidden="">
                      اختر المحافظة
                    </option>
                    <option value="عمان">عمان</option>
                    <option value="اربد">اربد</option>
                    <option value="الطفيلة">الطفيلة</option>
                    <option value="الزرقاء">الزرقاء</option>
                    <option value="العقبة">العقبة</option>
                    <option value="السلط">السلط</option>
                    <option value="مادبا">مادبا</option>
                    <option value="الكرك">الكرك</option>
                    <option value="عجلون">عجلون</option>
                    <option value="جرش">جرش</option>
                    <option value="معان">معان</option>
                    <option value="المفرق">المفرق</option>
                    <option value="عمان">عمان</option>
                  </select>
                  {validationsErrors?.province && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.province}
                    </span>
                  )}
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className={`app-form ${validationsErrors.region && "error"}`}
                >
                  <label className="control-label">اسم المنطقة :</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.region}
                    type="text"
                    className={`form-control`}
                    placeholder="اسم المنطقة"
                    name="region"
                  />
                  {validationsErrors?.region && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.region}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className={`app-form ${validationsErrors.street && "error"}`}
                >
                  <label className="control-label">
                    اسم الشارع: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.street}
                    className={`form-control`}
                    placeholder="اسم الشارع"
                    name="street"
                    id="street"
                  />
                  {validationsErrors?.street && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.street}
                    </span>
                  )}
                  <span className="errors_steps" id="mobile_error"></span>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.landmark && "error"
                  }`}
                >
                  <label className="control-label">
                    أقرب معلم: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.landmark}
                    className={`form-control`}
                    placeholder="أقرب معلم"
                    name="landmark"
                    id="landmark"
                  />
                  {validationsErrors?.landmark && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.landmark}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-2">
                <div
                  className={`app-form ${
                    validationsErrors.house_number && "error"
                  }`}
                >
                  <label className="control-label">
                    رقم المنزل: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.house_number}
                    className={`form-control`}
                    placeholder="رقم المنزل"
                    name="house_number"
                  />
                  {validationsErrors?.house_number && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.house_number}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className={`app-form ${
                    validationsErrors.store_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم المعرض: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.store_name}
                    className={`form-control`}
                    placeholder="اسم المعرض"
                    name="store_name"
                  />
                  {validationsErrors?.store_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.store_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.employee_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم الموظف الذي تواصل معك: <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.employee_name}
                    className={`form-control`}
                    placeholder="اسم الموظف الذي تواصل معك"
                    name="employee_name"
                  />
                  {validationsErrors?.employee_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.employee_name}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          {isKafeel === "1" && (
            <KafeelAddress
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

export default Address;
