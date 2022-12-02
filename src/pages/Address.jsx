import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import KafeelAddress from "../components/kafeelAddress";
import { useParams, useNavigate } from "react-router-dom";
const Address = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
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
        await axios.post(`address`, { ...values, id });
        navigate("/work/" + id);
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
                </div>
              </div>

              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">اسم المنطقة :</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.region}
                    type="text"
                    className={`form-control`}
                    placeholder="اسم المنطقة"
                    name="region"
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
                    value={formik.values.street}
                    className={`form-control`}
                    placeholder="اسم الشارع"
                    name="street"
                    id="street"
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
                    value={formik.values.landmark}
                    className={`form-control`}
                    placeholder="أقرب معلم"
                    name="landmark"
                    id="landmark"
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
                    value={formik.values.house_number}
                    className={`form-control`}
                    placeholder="رقم المنزل"
                    name="house_number"
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
                    value={formik.values.store_name}
                    className={`form-control`}
                    placeholder="اسم المعرض"
                    name="store_name"
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
                    value={formik.values.employee_name}
                    className={`form-control`}
                    placeholder="اسم الموظف الذي تواصل معك"
                    name="employee_name"
                  />
                </div>
              </div>
            </div>
          </div>
          {isKafeel === "1" && (
            <KafeelAddress
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

export default Address;
