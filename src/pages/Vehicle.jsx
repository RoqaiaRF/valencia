import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import { useParams, useNavigate } from "react-router-dom";
const Vehicle = () => {
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      vehicle_type: "",
      vehicle_situation: "",
      first_payment: "",
      installment_period: "",
    },
    isInitialValid: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setValidationsErrors({});
        await axios.post(`car`, { ...values, id });
        navigate("/attachments/" + id);
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
        <h3 className="field-title"> معلومات المركبة</h3>
      </div>
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group form-inline ">
            <div className="row">
              <div className="col-md-6">
                <div className="app-form">
                  <label className="control-label">
                    نوع المركبة: <span className="star">*</span>
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.vehicle_type}
                    type="text"
                    className={`form-control`}
                    placeholder="نوع المركبة"
                    name="vehicle_type"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">
                    حالة المركبة : <span className="star">*</span>
                  </label>
                  <select
                    id="vehicle_situation"
                    value={formik.values.vehicle_situation}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="vehicle_situation"
                    required=""
                  >
                    <option value="" disabled="" hidden="">
                      اختر حالة المركبة
                    </option>
                    <option value="new">جديد </option>
                    <option value="used">مستعمل </option>
                  </select>
                </div>
              </div>
              <div className="col-md-5">
                <div className="app-form">
                  <label className="control-label">
                    الدفعة الاولى : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.first_payment}
                    className={`form-control`}
                    placeholder="الدفعة الاولى"
                    name="first_payment"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="app-form">
                  <label className="control-label">
                    مدة التقسيط : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.installment_period}
                    className={`form-control`}
                    placeholder="مدة التقسيط"
                    name="installment_period"
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

export default Vehicle;
