import { Button, Upload } from "antd";
import axios from "axios";
import KafeelAttach from "../components/kafeelAttachment";
import { useParams, useNavigate } from "react-router-dom";
function Attachment() {
  const navigate = useNavigate();
  const id = useParams().id;
  const isKafeel = localStorage.getItem("kafeel");
  return (
    <>
      {" "}
      <div className="field-header">
        <h3 className="field-title"> المرفقات</h3>
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
        {isKafeel === "1" && <KafeelAttach />}
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
      </div>
    </>
  );
}
export default Attachment;
