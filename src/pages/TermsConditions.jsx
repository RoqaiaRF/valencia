import { useEffect, useRef } from "react";
import { Button, Tooltip, message } from "antd";
import SignatureCanvas from "react-signature-canvas";
import { FaTrash } from "react-icons/fa";
import dataURItoBlob from "../functions/formData";
import axios from "axios";
import { useParams } from "react-router-dom";
function Terms() {
  const id = useParams().id;

  const sign = useRef();
  const check = useRef();
  useEffect(() => {
    message.config({ duration: 1000000000000000000 });
  }, []);
  return (
    <>
      <div className="field-header">
        <h3 className="field-title"> الشروط والاحكام</h3>
      </div>
      <div className="crif_p">
        <p>السادة شركة فلنسيا للسيارات  المحترمين ،</p>
        <p>تحية واحترام ،</p>
        <p className="text-justify">
          {" "}
          انا الموقع ادناه افوض شركة فلنسيا للسيارات  بالاستعلام و/او
          الافصاح و/او تزويد و/او تبادل المعلومات الائتمانية سواء بصفتي مدينا
          و/او كفيلا و/او شريك في شركة وذلك لدى كافة البنوك و/او الشركات المرخصة
          وفقا لاحكام قانون المعلومات الائتمانية على سيبل المثال شركة كريف
          الاردن او مؤسسة الضمان الاجتماعي عن طريق اي جهة اخرى يراها مناسبة ولدى
          وحدة الشيكات المرتجعة ونظام مركزية المخاطر المصرفية لدى البنك المركزي
          كما نوافق على تزويد الجهات اعلاه بمعلومات التزاماتي الشخصية
          والالتزامات المترتبة على الشركة التي انا شريكا فيها وعن البيانات
          الائتمانية المتعلقة بي سواء بصفتي مدينا و/او كفيلا و/او شريك في شركة
          بما في ذلك على سبيل المثال لا الحصر التسهيلات الائتمانية الممنوحة لي
          و/او التي ستمنح لي من حيث نوعها و/او مقدارها و/او تاريخ استحقاقها و/او
          الشروط و/او الضمانات المتعلقة بها بكافة انواعها والية تسديدها و/او مدى
          التزامنا بذلك و/او اي معلومات اخرى تطلبها وافوض البنك بالاستعلام و/او
          الافصاح وا/و تزويد و/او تبادل المعلومات الشخصية المتعلقة بي شخصياً
          كمدين و/او ككفيل ، وذلك على مسؤوليتي الكاملة ويعتبر كتابنا هذا موافقة
          وتفويضا غير مشروط وغير قابل للرجوع عنه ومستمرا ولا حاجة لتوقيع اي
          تفويض اخر مستقلا.
        </p>
        <p>
          علما انه تم اعلامي بحقي بالاطلاع على معلوماتي الائتمانية المستخرجة من
          نظام الاستعلام الائتماني (كريف) والاعتراض عليها وتصحيحها في حال وجود
          اي خطأ صادر عن شركة فلنسيا للسيارات  .
        </p>
        <p>
          و اقر ان التوقيع على النموذج هو توقيعي و قمت بتوقيعه بنفسي و تم ارساله
          الى شركة فلنسيا للسيارات  من الهاتف الشخصي العائد لي و اتحمل
          كامل المسوولية القانونية اذا تبين خلاف ذلك.
        </p>
      </div>
      <div className="signatureCont">
        <Tooltip title="حذف">
          <Button
            type="primary"
            danger
            shape="circle"
            icon={<FaTrash />}
            onClick={() => {
              sign.current.clear();
            }}
          />
        </Tooltip>
        <SignatureCanvas
          penColor="green"
          ref={sign}
          canvasProps={{ width: 300, height: 200, className: "sigCanvas" }}
        />
      </div>
      <div className="row">
        <div className="col-md-12" style={{ padding: 0 }}>
          <div
            className="app-form"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              paddingInline: 0,
            }}
          >
            <input type="checkbox" name="" id="" ref={check} />
            <label className="control-label" style={{ margin: 0 }}>
              الموافقة على الشروط والأحكام وأقر بصحة المعلومات ودقتها
              <span className="star"> * </span>
            </label>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <hr />
        <div className="py-2">
          <button
            onClick={async () => {
              if (!check.current.checked) {
                message.error("يجب الموافقه علي الشروط والاحكام");

                return;
              }
              if (sign.current.isEmpty()) {
                message.error("يجب ان يتم التوقيع");
              } else {
                try {
                  var blob = dataURItoBlob(sign.current.toDataURL());
                  var fd = new FormData(document.forms[0]);
                  fd.append("signature", blob, "sign.png");
                  fd.append("id", id);

                  await axios.post("http://localhost:8080/signiture", fd, {
                    headers: { "Content-Type": "multipart/form-data" },
                  });
                  message.success("شكرا لاتمامك المعلومات");
                } catch (error) {
                  message.error("حدث خطأ ما");
                }
              }
            }}
            style={{ width: 100 }}
            className="btn butt-primary nextBtn butt-lg pull-right step1_validation"
            id="otp"
          >
            تاكيد
          </button>
        </div>
      </div>
    </>
  );
}
export default Terms;
