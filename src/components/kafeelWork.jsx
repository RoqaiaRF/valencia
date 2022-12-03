function KafeelWork({ values, handleChange, validationsErrors }) {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> معلومات عمل الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.type_of_employment_kafeel && "error"
            }`}
          >
            <label className="control-label">
              نوع العمل: <span className="star">*</span>
            </label>
            <select
              id="type_of_employment_kafeel"
              value={values.type_of_employment_kafeel}
              onChange={handleChange}
              className="form-control"
              name="type_of_employment_kafeel"
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
            {validationsErrors?.type_of_employment_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.type_of_employment_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.employer_kafeel && "error"
            }`}
          >
            <label className="control-label">
              جهة العمل : <span className="star">*</span>
            </label>
            <input
              onChange={handleChange}
              value={values.employer_kafeel}
              type="text"
              className={`form-control`}
              placeholder="جهة العمل"
              name="employer_kafeel"
            />
            {validationsErrors?.employer_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.employer_kafeel}
              </span>
            )}
          </div>
        </div>

        <div className="col-md-3">
          <div
            className={`app-form ${validationsErrors.job_kafeel && "error"}`}
          >
            <label className="control-label">
              {" "}
              الوظيفة : <span className="star">*</span>
            </label>
            <input
              onChange={handleChange}
              value={values.job_kafeel}
              type="text"
              className={`form-control`}
              placeholder="الوظيفة"
              name="job_kafeel"
            />
            {validationsErrors?.job_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.job_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.phone_work_kafeel && "error"
            }`}
          >
            <label className="control-label">
              هاتف العمل: <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.phone_work_kafeel}
              className={`form-control`}
              placeholder="هاتف العمل"
              name="phone_work_kafeel"
              id="phone_work_kafeel"
            />
            {validationsErrors?.phone_work_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.phone_work_kafeel}
              </span>
            )}
            <span className="errors_steps" id="mobile_error"></span>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.monthly_income_rate_kafeel && "error"
            }`}
          >
            <label className="control-label">
              معدل الدخل الشهري: <span className="star">*</span>
            </label>
            <input
              type="text"
              onChange={handleChange}
              value={values.monthly_income_rate_kafeel}
              className={`form-control`}
              placeholder="معدل الدخل الشهري"
              name="monthly_income_rate_kafeel"
              id="monthly_income_rate_kafeel"
            />
            {validationsErrors?.monthly_income_rate_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.monthly_income_rate_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div
            className={`app-form ${
              validationsErrors.other_source_of_income_kafeel && "error"
            }`}
          >
            <label className="control-label">مصدر دخل آخر :</label>
            <input
              type="text"
              onChange={handleChange}
              value={values.other_source_of_income_kafeel}
              className={`form-control`}
              placeholder="مصدر دخل آخر "
              name="other_source_of_income_kafeel"
            />
            {validationsErrors?.other_source_of_income_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.other_source_of_income_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.other_income_value_kafeel && "error"
            }`}
          >
            <label className="control-label">قيمة الدخل الآخر:</label>
            <input
              type="text"
              onChange={handleChange}
              value={values.other_income_value_kafeel}
              className={`form-control`}
              placeholder="قيمة الدخل الآخر"
              name="other_income_value_kafeel"
            />
            {validationsErrors?.other_income_value_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.other_income_value_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.is_daman_kafeel && "error"
            }`}
          >
            <label className="control-label">
              خاضع للضمان الاجتماعي : <span className="star">*</span>
            </label>
            <select
              id="is_daman_kafeel"
              value={values.is_daman_kafeel}
              onChange={handleChange}
              className="form-control"
              name="is_daman_kafeel"
              required=""
            >
              <option value="" disabled="" hidden="">
                اختر الاجابة
              </option>
              <option value="نعم">نعم</option>
              <option value="لا">لا</option>
            </select>
            {validationsErrors?.is_daman_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.is_daman_kafeel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KafeelWork;
