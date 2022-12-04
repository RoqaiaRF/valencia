import { Button, Upload, message } from "antd";
import axios from "../lib/axios";
import { useState, useEffect } from "react";
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
  const [validationsErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const id = useParams().id;
  const [userDone, setUserDone] = useState(false);
  const isKafeel = localStorage.getItem("kafeel");
  useEffect(() => {
    if (validationsErrors.space) {
      message.error(validationsErrors.space);
    }
  }, [validationsErrors]);
  return (
    <>
      {" "}
      <div className="field-header">
        <h3 className="field-title"> المرفقات</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.front_id_image && "error"
            }`}
          >
            <label className="control-label">
              صورة الهوية من الامام : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              style={{ width: "100" }}
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
            {validationsErrors?.front_id_image && (
              <span className="error_message">
                {" "}
                {validationsErrors?.front_id_image}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${validationsErrors.back_id_image && "error"}`}
          >
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
            {validationsErrors?.back_id_image && (
              <span className="error_message">
                {" "}
                {validationsErrors?.back_id_image}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.family_book_image && "error"
            }`}
          >
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
            {validationsErrors?.family_book_image && (
              <span className="error_message">
                {" "}
                {validationsErrors?.family_book_image}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.income_certificate && "error"
            }`}
          >
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
            {validationsErrors?.income_certificate && (
              <span className="error_message">
                {" "}
                {validationsErrors?.income_certificate}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`app-form ${validationsErrors.daman_image && "error"}`}
          >
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
            {validationsErrors?.daman_image && (
              <span className="error_message">
                {" "}
                {validationsErrors?.daman_image}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.another_attachments && "error"
            }`}
          >
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
            {validationsErrors?.another_attachments && (
              <span className="error_message">
                {" "}
                {validationsErrors?.another_attachments}
              </span>
            )}
          </div>
        </div>
        {isKafeel === "1" && (
          <KafeelAttach
            setKafeelImages={setKafeelImages}
            validationsErrors={validationsErrors}
          />
        )}
        <div className="col-md-12">
          <hr />
          <div className="py-2">
            <button
              onClick={async () => {
                try {
                  if (!userDone) {
                    const files = new FormData();
                    Object.keys(images).forEach((key) => {
                      files.append(key, images[key]);
                    });
                    files.append("id", id);
                    await axios.post("madeenfiles", files);
                    setUserDone(true);
                  }
                  if (isKafeel === "1") {
                    const filesKafeel = new FormData();
                    Object.keys(kafeelImages).forEach((key) => {
                      filesKafeel.append(key, kafeelImages[key]);
                    });
                    filesKafeel.append("id", id);
                    await axios.post("kafeelfiles", filesKafeel);
                  }

                  navigate("/terms/" + id);
                } catch (error) {
                  if (error?.response?.data)
                    setValidationErrors(error.response.data);
                }
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
