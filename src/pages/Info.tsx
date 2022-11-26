 import React, { useEffect, useState } from "react";

const Info = () => {

    return (
        <>          
        <h3 className="field"> معلومات المدين</h3>
            <div className="form-group form-inline ">
                <label className="control-label">الاسم (حسب الهوية) : <span className="star">*</span></label>
                <input type="text" className="form-control width input_step1" placeholder="الاسم الاول" name="name1" id="name1"   required="" />
                <input type="text" className="form-control width" placeholder="اسم الأب" name="name2" id="name2" required=""   />
                <input type="text" className="form-control width" placeholder="اسم الجد" name="name3" id="name3" required=""   />
                <input type="text" className="form-control width" placeholder="اسم العائلة" name="name4" id="name4" required=""   />
            </div>
            
<div className="form-group form-inline ">
    <label className="control-label">الجنسية : <span className="star">*</span></label>
    <select id="nationality" className="form-control" name="nationality" required="">
        <option   selected="" disabled="" hidden="">اختر الجنسية</option>
        <option value="أردنية">أردنية</option>
        <option value="غير أردنية">غير أردنية</option>
    </select>
</div>


<div className="form-group form-inline ">
    <label className="control-label">الجنس : <span className="star">*</span></label>
    <select id="gender" className="form-control" name="gender" required="">
        <option   selected="" disabled="" hidden="">اختر الجنس</option>
        <option value="ذكر">ذكر</option>
        <option value="أنثى">أنثى</option>
    </select>
</div>


<div className="form-group form-inline " id="national_number">
    <label className="control-label">الرقم الوطني : <span className="star">*</span></label>
    <input type="text" maxlength="10" className="form-control" placeholder="الرقم الوطني" pattern="[0-9\u0660-\u0669]{10}"   name="national_number" id="national_number1"/>
    <span className="errors_steps" id="national_number_error"></span>
</div>

<div className="form-group form-inline">
    <label className="control-label">نوع الوثيقة :</label>
    <select name="doc_type" id="" className="form-control">
        <option   disabled="" selected="" hidden="">اختر نوع الوثيقة </option>
        <option value="جواز سفر">جواز سفر</option>
        <option value="هوية احوال مدنية">هوية احوال مدنية</option>
    </select>
</div>
<div className="form-group form-inline">
    <label className="control-label">رقم الوثيقة :</label>
    <input type="text" className="form-control"  placeholder="رقم الوثيقة" name="doc_number"/>
</div>

<div className="form-group form-inline ">
    <label className="control-label">البريد الالكتروني : </label>
    <input type="text" className="form-control" placeholder="example@domain.com" name="email" id="email"/>

</div>


<div className="form-group form-inline " id="mobile_number_valid">
    <label className="control-label">رقم الهاتف الخلوي : <span className="star">*</span></label>
    <input type="tel" maxlength="10" className="form-control" placeholder="رقم الهاتف الخلوي (زين / أورانج / أمنية)" name="mobile_number" required="" id="mobile_number" pattern="(07|\u0660\u0667)[7-9\u0667-\u0669][0-9\u0660-\u0669]{7}"  />
    <span className="errors_steps" id="mobile_error"></span>
</div>

<div className="form-group form-inline">
    <label className="control-label">هل يوجد كفلاء : <span className="star">*</span></label>
    <input type="radio" id="yes_kafeel" name="kafeel-if" required=""/>
    <label for="yes_kafeel">يوجد</label>
    <div className=" second_radio ">
        <input type="radio" id="no_kafeel" name="kafeel-if"/>
        <label for="no_kafeel">لا يوجد</label>
        <input type="hidden" name="kafeel" id="kafeel"  />
    </div>
</div>

    <button class="btn btn-primary nextBtn btn-lg pull-right step1_validation" type="button" id="otp">التالي</button>

        </>

    );
};

export default Info;
