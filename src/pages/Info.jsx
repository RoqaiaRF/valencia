import React, { useState } from "react";
import { useFormik } from "formik";
import { Spin } from "antd";
import axios from "../lib/axios";
const Info = () => {
  const [isSuccess, setIsSuccess] = useState(false);
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
      isKafeel: "0",
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
        <h3 className="field-title"> معلومات المدين</h3>
      </div>
      <Spin spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group form-inline ">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="app-form">
                  <label className="control-label">
                    الاسم (حسب الهوية) : <span className="star">*</span>
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
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="app-form">
                  <label className="control-label">
                    الاسم (حسب الهوية) : <span className="star">*</span>
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
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="app-form">
                  <label className="control-label">
                    الاسم (حسب الهوية) : <span className="star">*</span>
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
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="app-form">
                  <label className="control-label">
                    الاسم (حسب الهوية) : <span className="star">*</span>
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
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
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
                    <option selected="" disabled="" hidden="">
                      اختر الجنسية
                    </option>
                    <option value="jordanian">أردنية</option>
                    <option value="not_jordanian">غير أردنية</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
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
                    <option selected="" disabled="" hidden="">
                      اختر الجنس
                    </option>
                    <option value="male">ذكر</option>
                    <option value="female">أنثى</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
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
                  <span
                    className="errors_steps"
                    id="national_number_error"
                  ></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">نوع الوثيقة :</label>
                  <select
                    name="type_doc"
                    value={formik.values.type_doc}
                    id=""
                    onChange={formik.handleChange}
                    className="form-control"
                  >
                    <option disabled="" selected="" hidden="">
                      اختر نوع الوثيقة{" "}
                    </option>
                    <option value="passport">جواز سفر</option>
                    <option value="national_id">هوية احوال مدنية</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
                  <label className="control-label">رقم الوثيقة :</label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.number_doc}
                    type="text"
                    className="form-control"
                    placeholder="رقم الوثيقة"
                    name="number_doc"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
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
                  <span className="errors_steps" id="mobile_error"></span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="app-form">
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
                        name="isKafeel"
                        required=""
                      />
                      <label for="yes_kafeel">نعم</label>
                    </div>
                    <div className="col-6">
                      <input
                        type="radio"
                        onChange={formik.handleChange}
                        value="0"
                        id="no_kafeel"
                        name="isKafeel"
                      />
                      <label for="no_kafeel">لا</label>
                    </div>
                  </div>
                </div>
              </div>
              {formik.values.isKafeel == "1" && (
                <div className="col-md-12 p-0">
                  <div className="field-header">
                    <h3 className="field-title"> معلومات الكفلاء</h3>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="app-form">
                        <label className="control-label">
                          الاسم الاول الكفيل (حسب الهوية) :{" "}
                          <span className="star">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          className="form-control width input_step1"
                          placeholder="الاسم الاول للكفيل"
                          name="first_name_kafeel"
                          value={formik.values.first_name_kafeel}
                          id="name1"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="app-form">
                        <label className="control-label">
                          اسم الأب للكفيل : <span className="star">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          className="form-control width"
                          placeholder="اسم الأب للكفيل"
                          name="second_name_kafeel"
                          id="name2"
                          value={formik.values.second_name_kafeel}
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="app-form">
                        <label className="control-label">
                          اسم الجد للكفيل : <span className="star">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          className="form-control width"
                          placeholder="اسم الجد للكفيل"
                          name="third_name_kafeel"
                          value={formik.values.third_name_kafeel}
                          id="name3"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="app-form">
                        <label className="control-label">
                          اسم العائلة للكفيل : <span className="star">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          className="form-control width"
                          placeholder="اسم العائلة للكفيل"
                          name="last_name"
                          value={formik.values.last_name_kafeel}
                          id="last_name_kafeel"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">
                          جنسية للكفيل : <span className="star">*</span>
                        </label>
                        <select
                          id="nationality"
                          onChange={formik.handleChange}
                          className="form-control"
                          value={formik.values.nationality_kafeel}
                          name="nationality_kafeel"
                          required=""
                        >
                          <option selected="" disabled="" hidden="">
                            اختر الجنسية
                          </option>
                          <option value="jordanian">أردنية</option>
                          <option value="not_jordanian">غير أردنية</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">
                          الجنس : <span className="star">*</span>
                        </label>
                        <select
                          id="gender"
                          value={formik.values.gender_kafeel}
                          onChange={formik.handleChange}
                          className="form-control"
                          name="gender_kafeel"
                          required=""
                        >
                          <option selected="" disabled="" hidden="">
                            اختر الجنس
                          </option>
                          <option value="male">ذكر</option>
                          <option value="female">أنثى</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">
                          الرقم الوطني للكفيل: <span className="star">*</span>
                        </label>
                        <input
                          type="text"
                          onChange={formik.handleChange}
                          maxlength="10"
                          value={formik.values.national_id_kafeel}
                          className="form-control"
                          placeholder="الرقم الوطني للكفيل"
                          pattern="[0-9\u0660-\u0669]{10}"
                          name="national_id_kafeel"
                          id="national_id"
                        />
                        <span
                          className="errors_steps"
                          id="national_number_error"
                        ></span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">نوع الوثيقة :</label>
                        <select
                          name="type_doc_kafeel"
                          value={formik.values.type_doc_kafeel}
                          id=""
                          onChange={formik.handleChange}
                          className="form-control"
                        >
                          <option disabled="" selected="" hidden="">
                            اختر نوع الوثيقة{" "}
                          </option>
                          <option value="passport">جواز سفر</option>
                          <option value="national_id">هوية احوال مدنية</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">رقم الوثيقة :</label>
                        <input
                          onChange={formik.handleChange}
                          value={formik.values.number_doc_kafeel}
                          type="text"
                          className="form-control"
                          placeholder="رقم الوثيقة"
                          name="number_doc_kafeel"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="app-form">
                        <label className="control-label">
                          رقم الهاتف الخلوي للكفيل:{" "}
                          <span className="star">*</span>
                        </label>
                        <input
                          type="tel"
                          maxlength="10"
                          onChange={formik.handleChange}
                          value={formik.values.phone_kafeel}
                          className="form-control"
                          placeholder="رقم الهاتف الخلوي (زين / أورانج / أمنية)"
                          name="phone_kafeel"
                          required=""
                          id="mobile_number"
                          pattern="(07|\u0660\u0667)[7-9\u0667-\u0669][0-9\u0660-\u0669]{7}"
                        />
                        <span className="errors_steps" id="mobile_error"></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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

export default Info;
