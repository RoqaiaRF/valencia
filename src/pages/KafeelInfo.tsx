const Info = () => {

    return (
        <>          
      

<div class="col-sm-12" id="kafeel_info" >
        <h3 class="field"> معلومات الكفيل</h3>
        <div class="form-group form-inline ">
            <label class="control-label">الاسم الرباعي : <span class="star">*</span></label>
            <input type="text" class="form-control kafeel-input required-kafeel width input_step1" placeholder="الاسم الاول" name="name1_kafeel" id="name1_kafeel" value=""/>
            <input type="text" class="form-control kafeel-input required-kafeel width" placeholder="اسم الأب" name="name2_kafeel" id="name2_kafeel" value=""/>
            <input type="text" class="form-control kafeel-input required-kafeel width" placeholder="اسم الجد" name="name3_kafeel" id="name3_kafeel" value=""/>
            <input type="text" class="form-control kafeel-input required-kafeel width" placeholder="اسم العائلة" name="name4_kafeel" id="name4_kafeel" value=""/>
        </div>

        <div class="form-group form-inline ">
            <label class="control-label">الجنسية : <span class="star">*</span></label>
            <select id="nationality_kafeel" class="form-control kafeel-input required-kafeel" name="nationality_kafeel">
                <option value="" selected="" disabled="" hidden="">اختر الجنسية</option>
                <option value="أردنية">أردنية</option>
                <option value="غير أردنية">غير أردنية</option>
            </select>
        </div>

        <div class="form-group form-inline " id="national_number_kafeel"  >
            <label class="control-label">الرقم الوطني : <span class="star">*</span></label>
            <input type="text" class="form-control kafeel-input" placeholder="الرقم الوطني" pattern="[0-9\u0660-\u0669]{10}" name="national_number_kafeel" value="" id="national_number_kafeel1" maxlength="10"/>
            <span class="errors_steps" id="national_number_error_kafeel"></span>
        </div>


        <div class="form-group form-inline">
            <label class="control-label">نوع الوثيقة :</label>
            <select name="doc_type_kafeel" id="" class="form-control kafeel-input">
                <option value="" disabled="" selected="" hidden="">اختر نوع الوثيقة </option>
                <option value="جواز سفر">جواز سفر</option>
                <option value="هوية احوال مدنية"  >هوية احوال مدنية</option>
            </select>
        </div>
        <div class="form-group form-inline">
            <label class="control-label">رقم الوثيقة :</label>
            <input type="text" class="form-control kafeel-input" value="" placeholder="رقم الوثيقة" name="doc_number_kafeel"/>
        </div>

        
        <div class="form-group form-inline ">
            <label class="control-label">البريد الالكتروني : </label>
            <input type="text" class="form-control kafeel-input" placeholder="example@domain.com" value="" name="email_kafeel" id="email_kafeel"/>

        </div>
        

        <div class="form-group form-inline " id="mobile_number_valid_kafeel">
            <label class="control-label">رقم الهاتف الخلوي : <span class="star">*</span></label>
            <input type="tel" maxlength="10" class="form-control required-kafeel kafeel-input" placeholder="رقم الهاتف الخلوي (زين / أورانج / أمنية) " name="mobile_number_kafeel" id="mobile_number_kafeel" pattern="(07|\u0660\u0667)[7-9\u0667-\u0669][0-9\u0660-\u0669]{7}" value=""/>
            <span class="errors_steps" id="mobile_error_kafeel"></span>
        </div>

</div>

<div id="myModal2" class="modal fade" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                <div class="form-group ">
                    <div class="form-group form-inline" id="otp_div">
                        <p id="otp_message"></p>
                        <input type="text" class="form-control" id="otp_code" required=""/>
                        <button type="button" class="btn btn-md btn-primary" id="check_otp">تأكيد</button>
                        <button type="button" class="btn btn-md btn-primary" id="close_otp">إغلاق</button>
                        <input type="hidden" class="form-control" id="hidden_otp"/>
                        <p id="otp_error"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<button className="btn btn-primary nextBtn btn-lg pull-right step1_validation" type="button" id="otp">التالي</button>

</>

);
};

export default Info;
