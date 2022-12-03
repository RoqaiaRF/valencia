import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
import Kafeel from "../components/kafeel";
import Phone from "../components/phoneCode";
import firebase from "../firebase";
import "firebase/auth";
import { useNavigate } from "react-router-dom";
const Info = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [validationsErrors, setValidationsErrors] = useState({});
  const [validationsGeneral, setValidationsGeneral] = useState({});
  const [isPhone, setIsPhone] = useState(false);
  const [phoneDone, setPhoneDone] = useState(false);
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
      national_id: "",
      national_id_kafeel: "",
      type_doc: "",
      type_doc_kafeel: "",
      nationality: "",
      nationality_kafeel: "",
      number_doc: "",
      number_doc_kafeel: "",
      gender: "",
      gender_kafeel: "",
      phone: "",
      phone_kafeel: "",
      is_kafeel: "0",
    },
    initialErrors: true,
    enableReinitialize: true,
    onSubmit: async (values) => {},
  });
  useEffect(() => {
    localStorage.setItem("kafeel", formik.values.is_kafeel);
  }, [formik.values]);
  const configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptca varified");
        },
      }
    );
  };
  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+" + formik.values.phone;
    const appVerifier = window.recaptchaVerifier;
    console.log(phoneNumber);
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {});
  };
  const onDone = async () => {
    //setPhoneDone(true);
    try {
      const values = formik.values;
      setValidationsErrors({});
      const {
        first_name_kafeel,
        second_name_kafeel,
        third_name_kafeel,
        last_name_kafeel,
        national_id_kafeel,
        type_doc_kafeel,
        nationality_kafeel,
        number_doc_kafeel,
        gender_kafeel,
        house_number_kafeel,
        phone_kafeel,
        ...user
      } = values;
      const res = await axios.post(
        `info`,
        values.is_kafeel === "1" ? values : user
      );
      navigate("/address/" + res.data.message);
    } catch (error) {
      setIsPhone(false);
      if (error?.response?.data?.message) {
        setValidationsErrors(error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="field-header">
        <h3 className="field-title"> معلومات المدين</h3>
      </div>
      <div id="sign-in-button"></div>

      <Phone
        onDone={onDone}
        visible={isPhone}
        onClose={() => setIsPhone(false)}
      />
      <Spin spinning={formik.isSubmitting}>
        <form>
          <div className="form-group form-inline ">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div
                  className={`app-form ${
                    validationsErrors.first_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم الاول : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    className="form-control width input_step1"
                    placeholder="الاسم الاول"
                    name="first_name"
                    value={formik.values.first_name}
                    id="name1"
                    required=""
                  />
                  {validationsErrors?.first_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.first_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className={`app-form ${
                    validationsErrors.second_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم الاب : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    className="form-control width"
                    placeholder="اسم الأب"
                    name="second_name"
                    id="name2"
                    value={formik.values.second_name}
                  />
                  {validationsErrors?.second_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.second_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className={`app-form ${
                    validationsErrors.third_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم الجد : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    className="form-control width"
                    placeholder="اسم الجد"
                    name="third_name"
                    value={formik.values.third_name}
                    id="name3"
                    required=""
                  />
                  {validationsErrors?.third_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.third_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div
                  className={`app-form ${
                    validationsErrors.last_name && "error"
                  }`}
                >
                  <label className="control-label">
                    اسم العائلة : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    className="form-control width"
                    placeholder="اسم العائلة"
                    name="last_name"
                    value={formik.values.last_name}
                    id="last_name"
                    required=""
                  />
                  {validationsErrors?.last_name && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.last_name}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.nationality && "error"
                  }`}
                >
                  <label className="control-label">
                    الجنسية : <span className="star">*</span>
                  </label>
                  <select
                    id="nationality"
                    onChange={formik.handleChange}
                    className="form-control"
                    value={formik.values.nationality}
                    name="nationality"
                    required=""
                  >
                    <option disabled="" hidden="">
                      اختر الجنسية
                    </option>
                    <option value="اردني">أردنية</option>
                    <option value="غير اردني">غير أردنية</option>
                  </select>
                  {validationsErrors?.nationality && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.nationality}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${validationsErrors.gender && "error"}`}
                >
                  <label className="control-label">
                    الجنس : <span className="star">*</span>
                  </label>
                  <select
                    id="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    className="form-control"
                    name="gender"
                    required=""
                  >
                    <option disabled="" hidden="">
                      اختر الجنس
                    </option>
                    <option value="ذكر">ذكر</option>
                    <option value="انثي">أنثى</option>
                  </select>
                  {validationsErrors?.gender && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.gender}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.national_id && "error"
                  }`}
                >
                  <label className="control-label">
                    الرقم الوطني : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.national_id}
                    className="form-control"
                    placeholder="الرقم الوطني"
                    name="national_id"
                    id="national_id"
                  />
                  {validationsErrors?.national_id && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.national_id}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.type_doc && "error"
                  }`}
                >
                  <label className="control-label">نوع الوثيقة :</label>
                  <select
                    name="type_doc"
                    value={formik.values.type_doc}
                    id=""
                    onChange={formik.handleChange}
                    className="form-control"
                  >
                    <option disabled="" hidden="">
                      اختر نوع الوثيقة{" "}
                    </option>
                    <option value="جواز سفر">جواز سفر</option>
                    <option value="احوال مدنية">هوية احوال مدنية</option>
                  </select>
                  {validationsErrors?.type_doc && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.type_doc}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.number_doc && "error"
                  }`}
                >
                  <label className="control-label">رقم الوثيقة :</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.number_doc}
                    type="text"
                    className="form-control"
                    placeholder="رقم الوثيقة"
                    name="number_doc"
                  />
                  {validationsErrors?.number_doc && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.number_doc}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${validationsErrors.phone && "error"}`}
                >
                  <label className="control-label">
                    رقم الهاتف الخلوي : <span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    className="form-control"
                    placeholder="رقم الهاتف الخلوي (زين / أورانج / أمنية)"
                    name="phone"
                    id="mobile_number"
                  />
                  {validationsErrors?.phone && (
                    <span className="error_message">
                      {" "}
                      {validationsErrors?.phone}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`app-form ${
                    validationsErrors.is_kafeel && "error"
                  }`}
                >
                  <label className="control-label">
                    هل يوجد كفلاء : <span className="star">*</span>
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="radio"
                        value="1"
                        onChange={formik.handleChange}
                        id="yes_kafeel"
                        checked={formik.values.is_kafeel === "1"}
                        name="is_kafeel"
                        required=""
                      />
                      <label htmlFor="yes_kafeel">نعم</label>
                    </div>
                    <div className="col-6">
                      <input
                        type="radio"
                        onChange={formik.handleChange}
                        checked={formik.values.is_kafeel === "0"}
                        value="0"
                        id="no_kafeel"
                        name="is_kafeel"
                      />
                      <label htmlFor="no_kafeel">لا</label>
                    </div>
                  </div>
                </div>
              </div>
              {formik.values.is_kafeel === "1" && (
                <Kafeel
                  handleChange={formik.handleChange}
                  values={formik.values}
                  validationsErrors={validationsErrors}
                />
              )}
            </div>
          </div>
        </form>
        <div className="col-md-12">
          <hr />
          <div className="py-2">
            <button
              onClick={(e) => {
                // if (!formik.values.phone) {
                //   setValidationsErrors({ phone: "رقم الهاتف مطلوب" });
                //   return;
                // }
                if (phoneDone) {
                 
                  
                } onDone();return;
                 //setIsPhone(true);
              //   onSignInSubmit(e);
              }}
              style={{ width: 100 }}
              className="btn butt-primary nextBtn butt-lg pull-right step1_validation"
              id="otp"
            >
              التالي
            </button>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default Info;
