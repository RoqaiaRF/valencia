const Kafeel = ({ values, handleChange, validationsErrors }) => {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> معلومات الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div
            className={`app-form ${
              validationsErrors.first_name_kafeel && "error"
            }`}
          >
            <label className="control-label">
              الاسم الاول الكفيل (حسب الهوية) : <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control width input_step1"
              placeholder="الاسم الاول للكفيل"
              name="first_name_kafeel"
              value={values.first_name_kafeel}
              id="name1"
              required=""
            />
            {validationsErrors?.first_name_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.first_name_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div
            className={`app-form ${
              validationsErrors.second_name_kafeel && "error"
            }`}
          >
            <label className="control-label">
              اسم الأب للكفيل : <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control width"
              placeholder="اسم الأب للكفيل"
              name="second_name_kafeel"
              id="name2"
              value={values.second_name_kafeel}
            />
            {validationsErrors?.second_name_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.second_name_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div
            className={`app-form ${
              validationsErrors.third_name_kafeel && "error"
            }`}
          >
            <label className="control-label">
              اسم الجد للكفيل : <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control width"
              placeholder="اسم الجد للكفيل"
              name="third_name_kafeel"
              value={values.third_name_kafeel}
              id="name3"
              required=""
            />
            {validationsErrors?.third_name_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.third_name_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div
            className={`app-form ${
              validationsErrors.last_name_kafeel && "error"
            }`}
          >
            <label className="control-label">
              اسم العائلة للكفيل : <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              className="form-control width"
              placeholder="اسم العائلة للكفيل"
              name="last_name_kafeel"
              value={values.last_name_kafeel}
              id="last_name_kafeel"
              required=""
            />
            {validationsErrors?.last_name_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.last_name_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.nationality_kafeel && "error"
            }`}
          >
            <label className="control-label">
              جنسية للكفيل : <span className="star">*</span>
            </label>
            <select
              id="nationality"
              onChange={handleChange}
              className="form-control"
              value={values.nationality_kafeel}
              name="nationality_kafeel"
              required=""
            >
              <option disabled="" hidden="">
                اختر الجنسية
              </option>
              <option value="أردنية">أردنية</option>
              <option value="غير أردنية">غير أردنية</option>
            </select>
            {validationsErrors?.nationality_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.nationality_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${validationsErrors.gender_kafeel && "error"}`}
          >
            <label className="control-label">
              الجنس : <span className="star">*</span>
            </label>
            <select
              id="gender"
              value={values.gender_kafeel}
              onChange={handleChange}
              className="form-control"
              name="gender_kafeel"
              required=""
            >
              <option disabled="" hidden="">
                اختر الجنس
              </option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
            {validationsErrors?.gender_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.gender_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.national_id_kafeel && "error"
            }`}
          >
            <label className="control-label">
              الرقم الوطني للكفيل: <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              maxlength="10"
              value={values.national_id_kafeel}
              className="form-control"
              placeholder="الرقم الوطني للكفيل"
              pattern="[0-9\u0660-\u0669]{10}"
              name="national_id_kafeel"
              id="national_id"
            />
            {validationsErrors?.national_id_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.national_id_kafeel}
              </span>
            )}
            <span className="errors_steps" id="national_number_error"></span>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.type_doc_kafeel && "error"
            }`}
          >
            <label className="control-label">نوع الوثيقة :</label>
            <select
              name="type_doc_kafeel"
              value={values.type_doc_kafeel}
              id=""
              onChange={handleChange}
              className="form-control"
            >
              <option disabled="" hidden="">
                اختر نوع الوثيقة{" "}
              </option>
              <option value="جواز سفر">جواز سفر</option>
              <option value="هوية احوال مدنية">هوية احوال مدنية</option>
            </select>
            {validationsErrors?.type_doc_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.type_doc_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.number_doc_kafeel && "error"
            }`}
          >
            <label className="control-label">رقم الوثيقة :</label>
            <input
              onChange={handleChange}
              value={values.number_doc_kafeel}
              type="text"
              className="form-control"
              placeholder="رقم الوثيقة"
              name="number_doc_kafeel"
            />
            {validationsErrors?.number_doc_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.number_doc_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${validationsErrors.phone_kafeel && "error"}`}
          >
            <label className="control-label">
              رقم الهاتف الخلوي للكفيل: <span className="star">*</span>
            </label>
            <input
              type="tel"
              maxlength="10"
              onChange={handleChange}
              value={values.phone_kafeel}
              className="form-control"
              placeholder="رقم الهاتف الخلوي (زين / أورانج / أمنية)"
              name="phone_kafeel"
              required=""
              id="mobile_number"
              // pattern="(07|\u0660\u0667)[7-9\u0667-\u0669][0-9\u0660-\u0669]{7}"
            />

            {validationsErrors?.phone_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.phone_kafeel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kafeel;
