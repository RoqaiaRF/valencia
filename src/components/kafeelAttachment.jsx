import { Button, Upload } from "antd";
function KafeelAttach() {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> مرفقات الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="app-form">
            <label className="control-label">
              صورة الهوية من الامام : <span className="star">*</span>
            </label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>صورة الهوية من الامام</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-4">
          <div className="app-form">
            <label className="control-label">
              صورة الهوية من الخلف : <span className="star">*</span>
            </label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>صورة الهوية من الخلف</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">
              صورة دفتر العائلة : <span className="star">*</span>
            </label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>صورة دفتر العائلة</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">شهادة راتب :</label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>شهادة راتب </Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-6">
          <div className="app-form">
            <label className="control-label">صورة عن الضمان الاجتماعي :</label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>
                صورة عن الضمان الاجتماعي{" "}
              </Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">مرفقات أخرى :</label>
            <Upload style={{ width: "100%" }} accept="image/*,.pdf">
              <Button style={{ width: "100%" }}>مرفقات أخرى </Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
}
export default KafeelAttach;
