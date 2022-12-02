import { Button, Upload } from "antd";
function KafeelAttach({ setKafeelImages, validationsErrors }) {
  return (
    <div className="col-md-12 p-0">
      <div className="field-header">
        <h3 className="field-title"> مرفقات الكفلاء</h3>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.front_id_image_kafeel && "error"
            }`}
          >
            <label className="control-label">
              صورة الهوية من الامام : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              style={{ width: "100%" }}
              accept="image/*,.pdf"
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, front_id_image_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    front_id_image_kafeel: e.fileList[0].originFileObj,
                  };
                });
              }}
              customRequest={({ onSuccess }) => {
                onSuccess("done");
              }}
            >
              <Button style={{ width: "100%" }}>صورة الهوية من الامام</Button>
            </Upload>
            {validationsErrors?.front_id_image_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.front_id_image_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`app-form ${
              validationsErrors.back_id_image_kafeel && "error"
            }`}
          >
            <label className="control-label">
              صورة الهوية من الخلف : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, back_id_image_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    back_id_image_kafeel: e.fileList[0].originFileObj,
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
            {validationsErrors?.back_id_image_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.back_id_image_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.family_book_image_kafeel && "error"
            }`}
          >
            <label className="control-label">
              صورة دفتر العائلة : <span className="star">*</span>
            </label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, family_book_image_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    family_book_image_kafeel: e.fileList[0].originFileObj,
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
            {validationsErrors?.family_book_image_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.family_book_image_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.income_certificate_kafeel && "error"
            }`}
          >
            <label className="control-label">شهادة راتب :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, income_certificate_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    income_certificate_kafeel: e.fileList[0].originFileObj,
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
            {validationsErrors?.income_certificate_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.income_certificate_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`app-form ${
              validationsErrors.daman_image_kafeel && "error"
            }`}
          >
            <label className="control-label">صورة عن الضمان الاجتماعي :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, daman_image_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    daman_image_kafeel: e.fileList[0].originFileObj,
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
            {validationsErrors?.daman_image_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.daman_image_kafeel}
              </span>
            )}
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`app-form ${
              validationsErrors.another_attachments_kafeel && "error"
            }`}
          >
            <label className="control-label">مرفقات أخرى :</label>
            <Upload
              maxCount={1}
              onRemove={() =>
                setKafeelImages((images) => {
                  return { ...images, another_attachments_kafeel: "" };
                })
              }
              onChange={(e) => {
                if (!e.fileList[0]) return;
                setKafeelImages((images) => {
                  return {
                    ...images,
                    another_attachments_kafeel: e.fileList[0].originFileObj,
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
            {validationsErrors?.another_attachments_kafeel && (
              <span className="error_message">
                {" "}
                {validationsErrors?.another_attachments_kafeel}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default KafeelAttach;
