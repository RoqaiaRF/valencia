function KafeelWork({ values, handleChange }) {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> معلومات عمل الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">
              نوع العمل: <span className="star">*</span>
            </label>
            <select
              id="province_kafeel"
              value={values.province_kafeel}
              onChange={handleChange}
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
              onChange={handleChange}
              value={values.region}
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
              onChange={handleChange}
              value={values.region}
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
              onChange={handleChange}
              value={values.street}
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
              onChange={handleChange}
              value={values.landmark}
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
              onChange={handleChange}
              value={values.house_number}
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
              onChange={handleChange}
              value={values.store_name}
              className={`form-control`}
              placeholder="قيمة الدخل الآخر"
              name="store_name"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="app-form">
            <label className="control-label">
              خاضع للضمان الاجتماعي : <span className="star">*</span>
            </label>
            <select
              id="province_kafeel"
              value={values.province_kafeel}
              onChange={handleChange}
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
  );
}
export default KafeelWork;
