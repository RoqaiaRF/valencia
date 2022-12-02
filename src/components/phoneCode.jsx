import { Modal } from "antd";

import { Form, Input, message } from "antd";

import { FaLock } from "react-icons/fa";
import { useState } from "react";
function Phone({ visible, onClose, onDone }) {
  const [code, setCode] = useState("");
  const onSubmitOTP = (e) => {
    e.preventDefault();
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        onDone();
        // ...
      })
      .catch((error) => {
        message.error("رمز هاتف خاطئ");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  return (
    <Modal
      onCancel={onClose}
      open={visible}
      okText="تأكيد"
      cancelText="الغاء"
      title="ادخل الكود المرسل"
      onOk={(e) => {
        if (!code) return;
        onSubmitOTP(e);
      }}
    >
      <div className="my-3 mt-4">
        <Form name="horizontal_login" layout="inline">
          <Form.Item
            name="text"
            rules={[
              {
                required: true,
                message: "الرجاء ادخال الكود",
              },
            ]}
          >
            <Input
              onChange={(e) => setCode(e.target.value)}
              prefix={<FaLock className="site-form-item-icon" />}
              type="test"
              placeholder="code"
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
}
export default Phone;
