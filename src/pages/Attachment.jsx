import { Button, Upload } from "antd";
import axios from "../lib/axios";
import { useState } from "react";
import KafeelAttach from "../components/kafeelAttachment";
import { useParams, useNavigate } from "react-router-dom";
function Attachment() {
  const [images, setImages] = useState({
    front_id_image: "",
    back_id_image: "",
    family_book_image: "",
    income_certificate: "",
    daman_image: "",
    another_attachments: "",
  });
  const [kafeelImages, setKafeelImages] = useState({
    front_id_image_kafeel: "",
    back_id_image_kafeel: "",
    family_book_image_kafeel: "",
    income_certificate_kafeel: "",
    daman_image_kafeel: "",
    another_attachments_kafeel: "",
  });
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
            <Upload
              maxCount={1}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
              onRemove={() =>
                setImages((images) => {
                  return { ...images, front_id_image: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    front_id_image: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
            >
              <Button style={{ width: "100%" }}>صورة الهوية من الامام</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-4">
          <div className="app-form">
            <label className="control-label">
              صورة الهوية من الخلف : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setImages((images) => {
                  return { ...images, back_id_image: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    back_id_image: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
            >
              <Button style={{ width: "100%" }}>صورة الهوية من الخلف</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">
              صورة دفتر العائلة : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setImages((images) => {
                  return { ...images, family_book_image: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    family_book_image: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
            >
              <Button style={{ width: "100%" }}>صورة دفتر العائلة</Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">شهادة راتب :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setImages((images) => {
                  return { ...images, income_certificate: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    income_certificate: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
            >
              <Button style={{ width: "100%" }}>شهادة راتب </Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-6">
          <div className="app-form">
            <label className="control-label">صورة عن الضمان الاجتماعي :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setImages((images) => {
                  return { ...images, daman_image: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    daman_image: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
            >
              <Button style={{ width: "100%" }}>
                صورة عن الضمان الاجتماعي{" "}
              </Button>
            </Upload>
          </div>
        </div>
        <div className="col-md-3">
          <div className="app-form">
            <label className="control-label">مرفقات أخرى :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setImages((images) => {
                  return { ...images, another_attachments: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setImages((images) => {
                  return {
                    ...images,
                    another_attachments: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
            >
              <Button style={{ width: "100%" }}>مرفقات أخرى </Button>
            </Upload>
          </div>
        </div>
        {isKafeel === "1" && <KafeelAttach setKafeelImages={setKafeelImages} />}
        <div className="col-md-12">
          <hr />
          <div className="py-2">
            <button
              onClick={async () => {
                try {
                  const files = new FormData();
                  const filesKafeel = new FormData();
                  Object.keys(images).forEach((key) => {
                    files.append(key, images[key]);
                  });
                  Object.keys(kafeelImages).forEach((key) => {
                    filesKafeel.append(key, kafeelImages[key]);
                  });
                  files.append("id", id);
                  filesKafeel.append("id", id);
                  const [filesRes, kafeelRes] = await Promise.all([
                    axios.post("madeenfiles", files),
                    axios.post("kafeelfiles", filesKafeel),
                  ]);
                  navigate("/terms/" + id);
                } catch (error) {}
              }}
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
