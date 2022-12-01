function KafeelAddress({ values, handleChange }) {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> عنوان الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">
              المحافظة : <span className="star">*</span>
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
                اختر المحافظة
              </option>
              <option value="Amman">عمان</option>
              <option value="Sanaa">الصنعاء</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="app-form">
            <label className="control-label">اسم المنطقة :</label>
            <input
              onChange={handleChange}
              value={values.region_kafeel}
              type="text"
              className="form-control"
              placeholder="اسم المنطقة"
              name="region_kafeel"
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
              onChange={handleChange}
              value={values.street_kafeel}
              className="form-control"
              placeholder="اسم الشارع"
              name="street_kafeel"
              id="street_kafeel"
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
              onChange={handleChange}
              value={values.landmark_kafeel}
              className="form-control"
              placeholder="أقرب معلم"
              name="landmark_kafeel"
              id="landmark_kafeel"
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
              onChange={handleChange}
              value={values.house_number_kafeel}
              className="form-control"
              placeholder="رقم المنزل"
              name="house_number_kafeel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default KafeelAddress;
