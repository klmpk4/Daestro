jQuery(document).ready(function() {

    var deletefile = [];
    var formData = { "div_back_gradient_1": "#fff", "div_back_gradient_2": "#fff", "back_color": "#fff", "form_title": "<h3>if you have transfer,please input the box below</h3>\n", "form_submit": "confirm payment", "after_submit": "redirect", "after_submit_msg": "", "captcha_enable": "no", "label_style": "blockLabels", "input_border_radius": "2", "back_type": "transparent", "input_back_color": "#fff", "input_back_color_hover": "#fff", "back_shadow": "none", "label_font_clr": "#333333", "input_font_clr": "#333333", "button_align": "fullBtn", "button_clr": "#ffffff", "button_back_clr": "#ea5d4c", "button_border_radius": "2", "form_width": "700px", "form_border_size": "2", "form_border_clr": "#c7c7c7", "form_border_radius": "1", "label_font_size": "14", "input_font_size": "12", "button_font_size": "16", "form_padding": "35", "input_border_color": "#ccc", "input_border_color_hover": "#ccc", "btn_border_clr": "#ffffff", "btn_border_size": "1", "form_name": "[Confirm Payment]", "": "andreas.535190020@stu.untar.ac.id", "form_emails": "andreas.535190020@stu.untar.ac.id", "submition_single_email": "no", "openinnewtab": "no", "after_submit_url": "https://daestro-cloth.herokuapp.com/", "formElements": [{ "type": "text", "position": 0, "label": "Nomor Order atau Invoice", "customClass": "", "halfwidth": "no", "Conditions": {}, "required": "yes" }, { "Conditions": {}, "type": "text", "position": 1, "label": "Nama Lengkap", "required": "yes" }, { "Conditions": {}, "type": "newdate", "position": 2, "label": "Transfer Date", "required": "yes" }, { "Conditions": {}, "type": "text", "position": 3, "label": "Nama Rekening Atas Nama", "required": "yes" }, { "Conditions": {}, "type": "text", "position": 4, "label": "Nama Bank", "required": "yes" }, { "Conditions": {}, "type": "text", "position": 5, "label": "Jumlah Transfer", "required": "yes" }, { "Conditions": {}, "type": "select", "position": 6, "label": "Destination Account", "required": "yes", "values": "BCA 1300-300-003 a.n Andre", "elementCost": {} }, { "Conditions": {}, "type": "image", "position": 7, "label": "Upload Bukti Transfer", "imageMultiple": "yes", "imagenoMultiple": 20, "required": "no" }] };
    if (typeof formData["label_font_family"] !== 'undefined') {
        $("head").append("<link href='https://fonts.googleapis.com/css?family=" + formData["label_font_family"] + "' rel='stylesheet' type='text/css'>");
    }
    if (typeof formData["input_font_family"] !== 'undefined') {
        $("head").append("<link href='https://fonts.googleapis.com/css?family=" + formData["input_font_family"] + "' rel='stylesheet' type='text/css'>");
    }

    var formElementCount = 0;

    if ((typeof formData['captcha_enable'] !== 'undefined') && (formData['captcha_enable'] == "yes")) {
        if ((typeof formData['captcha_align'] !== 'undefined') && (formData['captcha_align'] == 'center')) {
            $('.form_generater_form_div .form_captcha_div').css("text-align", "center");
        } else if ((typeof formData['captcha_align'] !== 'undefined') && (formData['captcha_align'] == 'right')) {
            $('.form_generater_form_div .form_captcha_div').css("text-align", "right");
        } else {
            $('.form_generater_form_div .form_captcha_div').css("text-align", "left");
        }
    }
    // Update language captcha 
    function updateGoogleCaptchaLanguage(selectedLanguage, selectorRecaptcha) {
        // Get GoogleCaptcha iframe
        var iframeGoogleCaptcha = $(selectorRecaptcha).find('iframe');
        // Get language code from iframe
        var language = iframeGoogleCaptcha.attr("src").match(/hl=(.*?)&/).pop();
        // Get selected language code from drop down
        // var selectedLanguage = $('#captcha_lang').val();
        // Check if language code of element is not equal by selected language, we need to set new language code
        if (language !== selectedLanguage) {
            // For setting new language 
            iframeGoogleCaptcha.attr("src", iframeGoogleCaptcha.attr("src").replace(/hl=(.*?)&/, 'hl=' + selectedLanguage + '&'));
        }
    }
    if ((typeof formData['captcha_lang'] !== 'undefined')) {
        setTimeout(function() {
            updateGoogleCaptchaLanguage(formData['captcha_lang'], '.form_captcha_div');
        }, 200);
    }
    if (typeof formData['label_style'] !== 'undefined' && formData['label_style'] != 'blockLabels') {
        $(".card_deails_div .form-group").each(function(index) {
            block_label = $(this).find('label').text();
            $(this).find(':input').attr('placeholder', block_label);
            $(this).find('label').css("display", "none");
        });
    }

    iframe_resize('no', 'no', 'initial');

    if (typeof formData['button_align'] !== 'undefined') {
        if (formData['button_align'] == "leftBtn") {
            $(".form_generater_form_div div.form_submit_div ").addClass('text-left').removeClass('text-center');
        } else if (formData['button_align'] == "centerBtn") {
            $(".form_generater_form_div div.form_submit_div ").addClass('text-center');
        } else if (formData['button_align'] == "rightBtn") {
            $(".form_generater_form_div .form_submit_div ").addClass('text-right').removeClass('text-center');
        }
    }

    paymentDisplay();
    $.each(formData['formElements'], function(index, value) {
        var type = value['type'];
        var minDate = '';
        var maxDate = '';
        if (typeof value['minDate'] !== 'undefined') {
            minDate = value['minDate'];
        }
        if (typeof value['maxDate'] !== 'undefined') {
            maxDate = value['maxDate'];
        }

        if (type == "date") {
            if (value['datetime'] == "time") {
                $('#datetime_' + formElementCount).find(':input').datetimepicker({
                    format: 'LT',
                    ignoreReadonly: true,
                    allowInputToggle: true
                });
            } else if (value['datetime'] == "date") {
                if ((minDate != '') && (maxDate != '')) {
                    $('#datetime_' + formElementCount).find(':input').datetimepicker({
                        format: 'MM/DD/YYYY',
                        minDate: minDate,
                        maxDate: maxDate,
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                } else if ((minDate == '') && (maxDate == '')) {
                    $('#datetime_' + formElementCount).find(':input').datetimepicker({
                        format: 'MM/DD/YYYY',
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                } else {
                    if ((minDate != '')) {
                        $('#datetime_' + formElementCount).find(':input').datetimepicker({
                            format: 'MM/DD/YYYY',
                            minDate: minDate,
                            ignoreReadonly: true,
                            allowInputToggle: true
                        });
                    } else if (maxDate != '') {
                        $('#datetime_' + formElementCount).find(':input').datetimepicker({
                            format: 'MM/DD/YYYY',
                            maxDate: maxDate,
                            ignoreReadonly: true,
                            allowInputToggle: true
                        });
                    }
                }
            } else {
                if ((minDate != '') && (maxDate != '')) {
                    $('#datetime_' + formElementCount).find(':input').datetimepicker({
                        minDate: minDate,
                        maxDate: maxDate,
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                } else if ((minDate == '') && (maxDate == '')) {
                    $('#datetime_' + formElementCount).find(':input').datetimepicker({
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                } else {
                    if ((minDate != '')) {
                        $('#datetime_' + formElementCount).find(':input').datetimepicker({
                            minDate: minDate,
                            ignoreReadonly: true,
                            allowInputToggle: true
                        });
                    } else if (maxDate != '') {
                        $('#datetime_' + formElementCount).find(':input').datetimepicker({
                            maxDate: maxDate,
                            ignoreReadonly: true,
                            allowInputToggle: true
                        });
                    }
                }
            }
        }

        if (type == "newdate") {
            if ((minDate != '') && (maxDate != '')) {
                $('#newdate_' + formElementCount).find(':input').datetimepicker({
                    format: 'MM/DD/YYYY',
                    minDate: minDate,
                    maxDate: maxDate,
                    ignoreReadonly: true,
                    allowInputToggle: true
                });
            } else if ((minDate == '') && (maxDate == '')) {
                $('#newdate_' + formElementCount).find(':input').datetimepicker({
                    format: 'MM/DD/YYYY',
                    ignoreReadonly: true,
                    allowInputToggle: true
                });
            } else {
                if ((minDate != '')) {
                    $('#newdate_' + formElementCount).find(':input').datetimepicker({
                        format: 'MM/DD/YYYY',
                        minDate: minDate,
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                } else if (maxDate != '') {
                    $('#newdate_' + formElementCount).find(':input').datetimepicker({
                        format: 'MM/DD/YYYY',
                        maxDate: maxDate,
                        ignoreReadonly: true,
                        allowInputToggle: true
                    });
                }
            }
        }

        if (type == "time") {
            $('#time_' + formElementCount).find(':input').datetimepicker({
                format: 'LT',
                ignoreReadonly: true,
                allowInputToggle: true
            });
        }

        if (formData['label_style'] != 'blockLabels') {
            $(".formElement_" + formElementCount).each(function(index) {
                if ($(this).hasClass('dateTime') || $(this).hasClass('textfield') || $(this).hasClass('textarea') || $(this).hasClass('number') || $(this).hasClass('email') || $(this).hasClass('dateTime') || $(this).hasClass('newDate') || $(this).hasClass('Time')) {
                    $(this).find('label').css("display", "none");
                    $(this).find(':input').attr("placeholder", $(this).find('label').text());
                } else if ($(this).hasClass('address')) {
                    addressLabelChange('inlineLabels', formElementCount);
                } else if ($(this).hasClass('select')) {
                    $(this).find('label').css("display", "none");
                    $(this).find('select > option:first-child').text($(this).find('label').text());
                }

                if ($(this).hasClass('dateTime')) {
                    $(this).find('label').css("display", "none");
                    $(this).find(':input').attr("placeholder", $(this).find('label').text());
                }
            });
        } else {
            elementHolder = '';
            if (typeof value['placeholder'] !== 'undefined') {
                elementHolder = value['placeholder'];
            }
            $(".formElement_" + formElementCount).each(function(index) {
                if ($(this).hasClass('textfield') || $(this).hasClass('textarea') || $(this).hasClass('number') || $(this).hasClass('email')) {
                    $(this).find('label').css("display", "block");
                    $(this).find(':input').attr("placeholder", elementHolder);
                } else if ($(this).hasClass('address')) {
                    addressLabelChange('blockLabels', formElementCount);
                }
                if ($(this).hasClass('select')) {
                    var elementHolder = (elementHolder == "") ? "Please Select" : elementHolder;
                    $(this).find('label').css("display", "block");
                    $(this).find('select > option:first-child').text(elementHolder);
                }
            });
        }
        formElementCount++;
    });


    $(document).on('click', '.alert_message .alert.alert-danger span', function() {
        $(".alert_message").css("display", "none");
        iframe_resize('no', 'no', 'error');
    });

    $('#stripePayment').change(function() {
        paymentDisplay();
    });
    iframe_resize('no', 'no', 'initial');
    $(document).on('click', '.form_submit_div .btn', function(e) {
        e.preventDefault();
        $('.form_submit_div .btn').prop('disabled', true);
        $('.error').removeClass('error');
        var captch_check = 1;
        if (formData['captcha_enable'] == 'yes') {
            var captcha_response = grecaptcha.getResponse();
            if (captcha_response.length == 0) {
                captch_check = 0;
            }
        }

        if (captch_check != 1) {
            $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> ' + "Please provide valid captcha response" + '</div>').css("display", "block");
            iframe_resize('yes', 'no', 'error');
            $('.form_submit_div .btn').prop('disabled', false);
        } else {
            var validate = 1;
            var confirmationMail = '';
            var email_check = '';
            var filters = [];
            var validMessage = '';

            $(".form_container div[class^='formElement']").each(function() {
                if (!$(this).attr("id")) {
                    if (formData['formElements'][$(this).data('count')]['required'] == 'yes') {
                        var required_message = " is required";
                        if ($(this).hasClass('radio')) {
                            if (!$(this).find("input:checked").val()) {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $("input[name='" + $(this).find('.block_label').text() + "']");
                            }
                        } else if ($(this).hasClass('checkbox')) {
                            if (!$(this).find(":input").is(':checked')) {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find(":input").addClass('error');
                            }
                        } else if ($(this).hasClass('checkbox-multi')) {
                            if ($(this).find(".checkboxmulti_" + $(this).data('count') + ":checkbox:checked").length <= 0) {
                                validate = 0;
                                filters.push($(this).find(':input').attr('name') + required_message);
                            }
                        } else if ($(this).hasClass('select')) {
                            if ($(this).find('select').val() == '') {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find('select').addClass('error');
                            }
                        } else if ($(this).hasClass('dateTime')) {
                            if ($(this).find(':input').val().trim() == '') {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find(':input').addClass('error');
                            }
                        } else if ($(this).hasClass('file')) {
                            if (typeof fileuploaded["fileupload_" + $(this).data('count')] == 'undefined') {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find('label').addClass('error');
                            }

                            if (typeof fileuploaded["fileupload_" + $(this).data('count')] !== 'undefined' && fileuploaded["fileupload_" + $(this).data('count')]['upload_type'] == 'multiple' && fileuploaded["fileupload_" + $(this).data('count')]['files'].length <= 0) {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find('label').addClass('error');
                            }
                        } else if ($(this).hasClass('image')) {
                            if (typeof fileuploaded["imageupload_" + $(this).data('count')] == 'undefined') {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find('label').addClass('error');
                            }

                            if (typeof fileuploaded["imageupload_" + $(this).data('count')] !== 'undefined' && fileuploaded["imageupload_" + $(this).data('count')]['upload_type'] == 'multiple' && fileuploaded["imageupload_" + $(this).data('count')]['images'].length <= 0) {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find('label').addClass('error');
                            }
                        } else if ($(this).hasClass('address')) {
                            field_name = formData['formElements'][$(this).data('count')]['label'];
                            $(this).find(':input.required').each(function() {
                                if ($(this).val().trim() == '') {
                                    validate = 0;
                                    sub_name = $(this).closest('.form-group').find('.block_label').text();
                                    filters.push(field_name + ' - ' + sub_name + required_message);
                                    $(this).addClass('error');
                                }
                            });
                        } else if ($(this).hasClass('raw_html')) {
                            //Don't Do anything, these are only for display
                        } else {
                            if ($(this).find(':input').val().trim() == '') {
                                validate = 0;
                                filters.push($(this).find(":input").attr('name') + required_message);
                                $(this).find(':input').addClass('error');
                            }
                        }
                    }

                    if ($(this).hasClass('email')) {
                        if ($(this).find(':input').val() != "") {
                            var cur_email_value = $(this).find(':input').val().toLowerCase();
                            if (!isEmail(cur_email_value)) {
                                validate = 0;
                                filters.push("Provide valid email format");
                                validMessage = "Provide valid email format";
                                $(this).find(':input').addClass('error');
                            } else {
                                var blk_email = "";
                                if (blk_email != '') {
                                    blocked_emails = blk_email.split(',');
                                    $.each(blocked_emails, function(index, value) {
                                        cDom = value.trim();
                                        var n = cur_email_value.endsWith("@" + cDom);
                                        var m = cur_email_value.endsWith("." + cDom);
                                        var last = cDom.substring(cDom.lastIndexOf("@") + 1, cDom.length);
                                        if (n == true || m == true) {
                                            validate = 0;
                                            validMessage = "This form does not accept addresses from  " + last;
                                            filters.push(validMessage);
                                        }
                                    });
                                }

                                if (email_check != '') {
                                    email_check = email_check + ',' + cur_email_value;
                                } else {
                                    email_check = cur_email_value;
                                }

                                email_check = cur_email_value;

                                if ($(this).find(':input').hasClass('email_confirm')) {
                                    if (confirmationMail != '') {
                                        confirmationMail = confirmationMail + ',' + cur_email_value;
                                    } else {
                                        confirmationMail = cur_email_value;
                                    }
                                }
                            }
                        }
                    }

                    if ($(this).find(':input').hasClass('url')) {
                        if ($(this).find(':input').val() != "") {
                            if (!validateUrl($(this).find(':input').val())) {
                                validate = 0;
                                filters.push("Provide valid URL");
                                validMessage = "Provide valid URL";
                                $(this).find(':input').addClass('error');
                            }
                        }
                    }

                    if ($(this).hasClass('number')) {
                        var number_val = $(this).find(':input').val();
                        if (number_val != "") {
                            if (isNaN(parseInt(number_val))) {
                                validate = 0;
                                filters.push("Images allowed " + $(this).find(':input').attr('name'));
                                validMessage = "Images allowed " + $(this).find(':input').attr('name');
                                $(this).find(':input').addClass('error');
                            } else {
                                if (typeof formData['formElements'][$(this).data('count')]['maxNumber'] !== 'undefined') {
                                    if (parseInt(number_val) > parseInt(formData['formElements'][$(this).data('count')]['maxNumber'])) {
                                        validate = 0;
                                        validMessage = $(this).find(':input').attr('name') + " must be less than " + formData['formElements'][$(this).data('count')]['maxNumber'].toString();
                                        filters.push($(this).find(':input').attr('name') + " must be less than " + formData['formElements'][$(this).data('count')]['maxNumber'].toString());
                                        $(this).find(':input').addClass('error');
                                    }
                                }
                                if (typeof formData['formElements'][$(this).data('count')]['minNumber'] !== 'undefined') {
                                    if (parseInt(number_val) < parseInt(formData['formElements'][$(this).data('count')]['minNumber'])) {
                                        validate = 0;
                                        validMessage = $(this).find(':input').attr('name') + " must be more than " + formData['formElements'][$(this).data('count')]['minNumber'].toString();
                                        filters.push($(this).find(':input').attr('name') + " must be more than " + formData['formElements'][$(this).data('count')]['minNumber'].toString());
                                        $(this).find(':input').addClass('error');
                                    }
                                }
                            }
                        }
                    }
                    filters = $.unique(filters);
                }
            });


            stripeToken = '';

            if (validate != 1) {
                if (filters.length > 0) {
                    $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + filters.join('<br/>') + '</div>').css("display", "block");
                } else if (validMessage != '') {
                    $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + validMessage + '</div>').css("display", "block");
                } else {
                    $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span>button> ' + "Please provide valid data" + ' </div>').css("display", "block");
                }
                $('html, body').animate({ scrollTop: $('#wizard-validation-form').offset().top }, 'slow');
                iframe_resize('yes', 'no', 'error');
                $('.form_submit_div .btn').prop('disabled', false);
            } else {
                swal({
                    title: "<div class='loader' style='width:100px;height:100px;'></div> <h4> " + "Processing..." + " </h4>",
                    html: true,
                    showConfirmButton: false
                });
                iframe_resize('yes', 'no', 'success');
                $('html, body').animate({ scrollTop: $('#wizard-validation-form').offset().top }, 'slow');
                var formResponse = {};
                var additional_price = 0.00;
                $(".form_container div[class^='formElement']").each(function() {
                    if ((!$(this).attr("id")) && (!$(this).hasClass('label')) && (!$(this).hasClass('lineBreak')) && (!$(this).hasClass('space'))) {
                        eCount = $(this).data('count');
                        fElement = formData['formElements'][eCount];
                        if ($(this).hasClass('radio')) {
                            submit_value = $(this).find("input:checked").val();
                        } else if ($(this).hasClass('checkbox')) {
                            if (!$(this).find("input").is(':checked')) {
                                submit_value = "Off";
                            } else {
                                submit_value = "On";
                            }
                        } else if ($(this).hasClass('checkbox-multi')) {
                            var checkValues = [];
                            $.each($("input[name='" + fElement['label'] + "']:checked"), function() {
                                checkValues.push($(this).val());
                            });
                            submit_value = checkValues.join(", ");
                        } else if ($(this).hasClass('select')) {
                            submit_value = $(this).find('select').val();
                        } else if ($(this).hasClass('dateTime')) {
                            submit_value = $(this).find(':input').val();
                        } else if ($(this).hasClass('file')) {
                            if (typeof fileuploaded["fileupload_" + eCount] !== 'undefined') {
                                if (fileuploaded["fileupload_" + eCount]['upload_type'] == 'multiple') {
                                    formResponse[formData['formElements'][eCount]['label']] = fileuploaded["fileupload_" + eCount];
                                } else {
                                    formResponse[formData['formElements'][eCount]['label']] = fileuploaded["fileupload_" + eCount];
                                }
                            } else {
                                formResponse[formData['formElements'][eCount]['label']] = '';
                            }
                        } else if ($(this).hasClass('image')) {
                            if (typeof fileuploaded["imageupload_" + eCount] !== 'undefined') {
                                if (fileuploaded["imageupload_" + eCount]['upload_type'] == 'multiple') {
                                    formResponse[formData['formElements'][eCount]['label']] = fileuploaded["imageupload_" + eCount];
                                } else {
                                    formResponse[formData['formElements'][eCount]['label']] = fileuploaded["imageupload_" + eCount];
                                }
                            } else {
                                formResponse[formData['formElements'][eCount]['label']] = '';
                            }
                        } else if ($(this).hasClass('address')) {
                            var address_array = $(this).find(':input').map(function() {
                                var obj = {};
                                obj[this.name] = $(this).val();
                                return obj;
                            }).get();
                            formResponse[fElement['label']] = address_array;
                        } else {
                            submit_value = $(this).find(':input').val();
                        }

                        if (typeof submit_value !== 'undefined') {
                            if (typeof formResponse[fElement['label']] !== 'undefined') {
                                fsArr = formResponse[fElement['label']];
                                if ($.isArray(fsArr)) {
                                    fsArr.push(submit_value);
                                } else {
                                    old_value = formResponse[fElement['label']];
                                    formResponse[fElement['label']] = [old_value];
                                    formResponse[fElement['label']].push(submit_value);
                                }
                            } else {
                                formResponse[formData['formElements'][eCount]['label']] = submit_value;
                            }
                        }
                        submit_value = undefined;
                    }
                });

                var payment_details = {};

                var formResponseCount = 2;
                /*$.each(formResponse, function(index, value) {
                    if(jQuery.type( value ) === "object"){
                         console.log(value, value.size()); 
                    } else {
                        if(value != 'undefined' && value.trim() != ''){
                            formResponseCount++;
                        }
                    }
                })*/
                if (formResponseCount <= 0) {
                    swal.close();
                    $("#formGeneratorForm input, #formGeneratorForm textarea").first().focus();
                    $('.form_submit_div .btn').prop('disabled', false);
                    iframe_resize('yes', 'no', 'error');
                    return false;
                } else {
                    $.ajax({
                        type: "POST",
                        url: "/ajaxcall/formresponse",
                        data: { form_uuid: "NNhKNwI9m8_ImVkSxpYpEw", formResponse: JSON.stringify(formResponse), confirmationMail: confirmationMail, payment_details: payment_details, is_pro: "false" },
                        success: function(data) {
                            swal.close();
                            $('.error').removeClass('error');
                            // $('html, body').animate({ scrollTop: $('#wizard-validation-form').offset().top }, 'slow');
                            $('span.fileres').text('');
                            $('#stripeToken').val('');
                            if (typeof data.charge_failed !== 'undefined') {
                                $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + data.message + '</div>').css("display", "block");
                                $('.form_submit_div .btn').prop('disabled', false);
                            } else {
                                window.onbeforeunload = null;
                                if (window.location !== window.parent.location) {
                                    if (formData['after_submit'] == 'clearAndPrevent') {
                                        $(".alert_message").html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + "Thank you! The form was submitted successfully." + '</div>').css("display", "block");
                                        iframe_resize('no', 'no', 'success');
                                        $(".alert_message .alert").fadeOut(5000, function() {
                                            $(this).remove();
                                            $(".alert_message").css("display", "none");
                                            iframe_resize('yes', 'no', 'success');
                                        });
                                        $('#formGeneratorForm')[0].reset();
                                        $('.form_submit_div .btn').prop('disabled', true);
                                        iframe_resize('yes', 'no', 'success');
                                    } else if (formData['after_submit'] == 'clearAndAllow') {
                                        var rlurl = document.URL + '&form_sbmt=yes';
                                        window.location.replace(rlurl);
                                    } else if (formData['after_submit'] == 'redirect') {
                                        if (typeof formData['after_submit_url'] !== 'undefined') {
                                            if (typeof formData['openinnewtab'] !== 'undefined' && formData['openinnewtab'] == 'yes') {
                                                var redirectURL = formData['after_submit_url'];
                                                if (redirectURL == '') {
                                                    location.reload();
                                                } else {
                                                    window.open(redirectURL, '_blank');
                                                    $(".formContainer").css("display", "none");
                                                    $(".formContainer").html('');
                                                    $(".after_form_submit .form_generater_form_div").html(formData['after_submit_msg']);
                                                    $(".after_form_submit").css("display", "block");
                                                    iframe_resize('yes', 'no', 'success');
                                                }
                                            } else {
                                                var redirectURL = formData['after_submit_url'];
                                                if (redirectURL == '') {
                                                    location.reload();
                                                } else {
                                                    window.top.location.href = redirectURL;
                                                }
                                            }
                                        } else {
                                            location.reload();
                                        }
                                    } else if (formData['after_submit'] == 'hideAndmessage') {
                                        $(".formContainer").css("display", "none");
                                        $(".formContainer").html('');
                                        $(".after_form_submit .form_generater_form_div").html(formData['after_submit_msg']);
                                        $(".after_form_submit").css("display", "block");
                                        iframe_resize('yes', 'no', 'success');
                                    } else if (formData['after_submit'] == 'responses') {
                                        var formResponse = jQuery.parseJSON(data['user_response']);
                                        var htmlrender = '<style type="text/css">.after_form_submit .form_generater_form_div table{border: 1px solid #ccc;}' +
                                            '.after_form_submit .form_generater_form_div tr{ border-bottom: 1px solid #ccc; }' +
                                            '.after_form_submit .form_generater_form_div tr:nth-child(2n) { background: #ededed; }' +
                                            '.after_form_submit .form_generater_form_div td {padding: 6px 5px; }' +
                                            '</style>' +
                                            '<h3> ' + "Your response" + ' </h3>' +
                                            '<table class="question_content" style="background-color: #fdfdfd;" cellpadding="15" border="1" cellspacing="0" width="100%" border-collapse="collapse">';
                                        $.each(formResponse, function(index, value) {
                                            htmlrender = htmlrender + '<tr><td><b>' + index + '</b></td><td>';
                                            if (typeof value != 'string') {
                                                if (value['type'] == 'image') {
                                                    if (value['upload_type'] == "multiple") {
                                                        $.each(value['images'], function(im_index, im_value) {
                                                            htmlrender = htmlrender + '<a href="' + im_value["url"] + '" target="_blank"><img src="' + im_value["url"] + '" alt="' + index + '" width="150"></a>';
                                                        });
                                                    } else {
                                                        htmlrender = htmlrender + '<a href="' + value["url"] + '" target="_blank"><img src="' + value["url"] + '" alt="' + index + '" width="150" alt="image"></a>';
                                                    }
                                                } else if (value['type'] == 'file') {
                                                    if (value['upload_type'] == "multiple") {
                                                        $.each(value['files'], function(im_index, im_value) {
                                                            htmlrender = htmlrender + '<br/><a href="' + im_value["url"] + '" target="_blank" style="margin-bottom: 10px;"> ' + "Download file" + '</a>';
                                                        });
                                                    } else {
                                                        htmlrender = htmlrender + '<a href="' + value["url"] + '" target="_blank">' + "Download file" + '</a>';
                                                    }
                                                } else if (typeof value["url"] !== 'undefined') {
                                                    htmlrender = htmlrender + ' <a href="' + value["url"] + '" class="btn btn-default" target="_blank">' + "Download file" + '</a>';
                                                } else {
                                                    $.each(value, function(index, address_value) {
                                                        $.each(address_value, function(im_index, im_value) {
                                                            if (im_value.trim() != '') {
                                                                htmlrender = htmlrender + im_index + ': ' + im_value + '</br>';
                                                            }
                                                        });
                                                    });
                                                }
                                            } else {
                                                htmlrender = htmlrender + ' ' + value.toString();
                                            }
                                            htmlrender = htmlrender + '</td></tr>';
                                        });
                                        htmlrender = htmlrender + '</table>';

                                        $(".formContainer").css("display", "none");
                                        $(".formContainer").html('');
                                        $(".after_form_submit .form_generater_form_div").html(htmlrender);
                                        $(".after_form_submit").css("display", "block");
                                        iframe_resize('yes', 'no', 'success');
                                    }
                                } else {
                                    if (formData['after_submit'] == 'clearAndPrevent' || formData['after_submit'] == 'redirect') {
                                        $(".alert_message").html('<div class="alert alert-success" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + "Thank you! The form was submitted successfully." + '</div>').css("display", "block");
                                        iframe_resize('no', 'no', 'success');
                                        $(".alert_message .alert").fadeOut(5000, function() {
                                            $(this).remove();
                                            $(".alert_message").css("display", "none");
                                            iframe_resize('yes', 'no', 'success');
                                        });
                                        $('#formGeneratorForm')[0].reset();
                                        $('.form_submit_div .btn').prop('disabled', true);
                                        iframe_resize('yes', 'no', 'success');
                                    } else if (formData['after_submit'] == 'clearAndAllow') {
                                        var rlurl = document.URL + '&form_sbmt=yes';
                                        window.location.replace(rlurl);
                                        $('.form_submit_div .btn').prop('disabled', false);
                                        iframe_resize('yes', 'no', 'success');
                                    } else if (formData['after_submit'] == 'hideAndmessage') {
                                        $(".formContainer").css("display", "none");
                                        $(".formContainer").html('');
                                        $(".after_form_submit .form_generater_form_div").html(formData['after_submit_msg']);
                                        $(".after_form_submit").css("display", "block");
                                        iframe_resize('yes', 'no', 'success');
                                    } else if (formData['after_submit'] == 'responses') {
                                        var formResponse = jQuery.parseJSON(data['user_response']);
                                        var htmlrender = '<style type="text/css">.after_form_submit .form_generater_form_div table{border: 1px solid #ccc;}' +
                                            '.after_form_submit .form_generater_form_div tr{ border-bottom: 1px solid #ccc; }' +
                                            '.after_form_submit .form_generater_form_div tr:nth-child(2n) { background: #ededed; }' +
                                            '.after_form_submit .form_generater_form_div td {padding: 6px 5px; }' +
                                            '</style>' +
                                            '<h3> ' + "Your response" + ' </h3>' +
                                            '<table class="question_content" style="background-color: #fdfdfd;" cellpadding="15" border="1" cellspacing="0" width="100%" border-collapse="collapse">';
                                        $.each(formResponse, function(index, value) {
                                            htmlrender = htmlrender + '<tr><td><b>' + index + '</b></td><td>';
                                            if (typeof value != 'string') {
                                                if (value['type'] == 'image') {
                                                    if (value['upload_type'] == "multiple") {
                                                        $.each(value['images'], function(im_index, im_value) {
                                                            htmlrender = htmlrender + '<a href="' + im_value["url"] + '" target="_blank"><img src="' + im_value["url"] + '" alt="' + index + '" width="150"></a>';
                                                        });
                                                    } else {
                                                        htmlrender = htmlrender + '<a href="' + value["url"] + '" target="_blank"><img src="' + value["url"] + '" alt="' + index + '" width="150"></a>';
                                                    }
                                                } else if (typeof value["url"] !== 'undefined') {
                                                    htmlrender = htmlrender + ' <a href="' + value["url"] + '" class="btn btn-default" target="_blank">' + "Download file" + '</a>';
                                                } else {
                                                    $.each(value, function(index, address_value) {
                                                        $.each(address_value, function(im_index, im_value) {
                                                            if (im_value.trim() != '') {
                                                                htmlrender = htmlrender + im_index + ': ' + im_value + '</br>';
                                                            }
                                                        });
                                                    });
                                                }
                                            } else {
                                                htmlrender = htmlrender + ' ' + value.toString();
                                            }
                                            htmlrender = htmlrender + '</td></tr>';
                                        });
                                        htmlrender = htmlrender + '</table>';

                                        $(".formContainer").css("display", "none");
                                        $(".formContainer").html('');
                                        $(".after_form_submit .form_generater_form_div").html(htmlrender);
                                        $(".after_form_submit").css("display", "block");
                                        iframe_resize('yes', 'no', 'success');
                                    }
                                }
                                var fileuploaded = {};
                                var htmlrender = '';
                                var formResponse = {};
                            }
                        },
                        error: function(data) {
                            swal.close();
                            $(".alert_message").html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + "Error occur.Please try again after sometime." + '</div>').css("display", "block");
                            $('.form_submit_div .btn').prop('disabled', false);
                            iframe_resize('yes', 'no', 'error');
                        }
                    });
                }
            }
        }
        return false;
    });

    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function validateUrl(url) {
        var urlregex = new RegExp("^(http:\/\/|https:\/\/|www.){1}([0-9A-Za-z]+\.)");
        return urlregex.test(url);
    }

    var fileuploaded = {};
    fileuploaded['imageupload_7'] = {};
    fileuploaded['imageupload_7']['images'] = [];
    fileuploaded['imageupload_7']['type'] = 'image';
    fileuploaded['imageupload_7']['upload_type'] = 'multiple';
    $('#imageupload_7').change(function() {
        var ext = $(this).val().split('.').pop().toLowerCase();
        if (ext.trim() != '') {
            if ($.inArray(ext, ['jpg', 'jpeg', 'png', 'svg']) == -1) {
                swal('', 'Invalid extension! Please provide image file', 'error');
                $('.sweet-alert .sa-button-container').css('cssText', 'display: block !important;');
                return false;
            } else {
                swal({ title: "<div class='loader'></div>", html: true, showConfirmButton: false });
                $('.formElement_7 span.fileres').html('');
                var input = this;
                upload_count = 0;
                var tmIU = fileuploaded['imageupload_7'];
                if (input.files.length + tmIU['images'].length <= 20) {
                    var file_to_upload = [];
                    var formData = new FormData();
                    formData.append('upimage[form_uuid]', 'NNhKNwI9m8_ImVkSxpYpEw');
                    formData.append('upimage[shop_uuid]', 'NNhKNwI9m8_ImVkSxpYpEw');
                    if (tmIU.length > 0) {
                        jQuery.each(tmIU['images'], function(i, file) {
                            file_to_upload.push(file);
                            formData.append('upimage[attachments][]', file);
                        });
                    }

                    var upload = true;

                    jQuery.each(input.files, function(i, file) {

                        file_to_upload.push(file);
                        formData.append('upimage[attachments][]', file);
                        var iSize = (file.size / 3072);
                        iSize = (Math.round(iSize * 100) / 100);
                        if (iSize > 3072) {
                            upload = false
                                //swal('', 'Image must be less than 3MB', 'error');
                            $('.formElement_7 span.fileres').html('Image must be less than 3MB');
                            return false;
                            swal.close();
                        }
                    });

                    if (upload) {
                        swal({ title: "<div class='loader'></div>", html: true, showConfirmButton: false });
                        $.ajax({
                            url: '/ajaxcall/multipleimageupload',
                            type: 'POST',
                            data: formData,
                            contentType: false,
                            cache: false,
                            processData: false,
                            success: function(data) {
                                if (data.length > 0) {
                                    $.each(data, function(i, imag_upld) {

                                        newImage = {};
                                        newImage['url'] = imag_upld['attachment']['url'];
                                        newImage['type'] = 'image';
                                        newImage['id'] = imag_upld['id'];

                                        tmIU['images'].push(newImage);
                                    });
                                    $('.formElement_7 span.fileres').html(tmIU['images'].length + ' Image(s) uploaded')
                                } else {
                                    $('.formElement_7 span.fileres').html('Error in image upload. Please try again.')
                                }

                                swal.close();
                            },
                            error: function() {
                                $('.formElement_7 span.fileres').html('Error in image upload. Please try again.');
                                swal.close();
                            }
                        });
                    }
                    // swal.close();
                } else {
                    swal('', '20 Images allowed', 'error');
                    $('.sweet-alert .sa-button-container').css('cssText', 'display: block !important;');
                    $('.formElement_7 span.fileres').html(tmIU['images'].length + ' Image(s) uploaded');
                }
                iframe_resize('no', 'no', 'initial');
            }
        }
    });

    $('.dropdown-toggle').dropdown();
    var width = $(window).width();

    $(window).resize(function() {
        if ($(this).width() != width) {
            width = $(this).width();
            iframe_resize('no', 'no', 'initial');
        }
        scaleCaptcha();
    });
    scaleCaptcha();

    function scaleCaptcha(elementWidth) {
        if ($(window).width() < 420) {
            var reCaptchaWidth = 304;
            var containerWidth = $('.form_captcha_div').width();

            if (reCaptchaWidth > containerWidth) {
                var captchaScale = containerWidth / reCaptchaWidth;
                $('.g-recaptcha').css({
                    'transform': 'scale(' + captchaScale + ')',
                    'transform-origin': '0 0',
                    '-ms-transform-origin': '0 0',
                    ' -webkit-transform-origin': '0 0'
                });
            } else {
                $('.g-recaptcha').css({
                    'transform': 'scale(1)'
                });
            }
        } else {
            $('.g-recaptcha').css({
                'transform': 'scale(1)'
            });
        }
    }

    $(document).on('click', '#formGeneratorForm .form_generater_form_div a[target!="_parent"]', function(e) {
        e.preventDefault();
        var redirectURL = $(this).attr('href');
        window.open(redirectURL, '_blank');
    });
    $('[data-toggle="tooltip"]').tooltip();


    $('.paymentCount :input').change(function() {
        paymentDisplay();
        return false;
    });

    function paymentDisplay() {
        var selected_price = payment_calculation(),
            display_price = 'no',
            currency_select = '$';
        if ((typeof formData['payment_integration'] != 'undefined') && (typeof formData['payment_integration']['payment_currency_symbol'] != 'undefined')) {
            currency_select = formData['payment_integration']['payment_currency_symbol'];
        }
        if ((typeof formData['payment_integration'] != 'undefined') && (typeof formData['payment_integration']['show_price'] != 'undefined')) {
            display_price = formData['payment_integration']['show_price'];
        }
        if (!isNaN(selected_price)) {
            if (display_price == 'yes') {
                $('.form_submit_div span.price').text('(' + currency_select + '' + selected_price + ')');
            } else {
                $('.form_submit_div span.price').text('');
            }
        }
    }

    function conditionalHide(division_id) {
        if ($("." + division_id).hasClass('checkbox-multi')) {
            $("." + division_id + ' input[type=checkbox]').prop("checked", false).trigger('change');
        } else if ($("." + division_id).hasClass('checkbox')) {
            $("." + division_id + ' input[type=checkbox]').prop("checked", false).trigger('change');
        } else if ($("." + division_id).hasClass('radio')) {
            $("." + division_id + ' input[type=radio]').removeAttr('checked').trigger('change');
        } else if ($("." + division_id).hasClass('select')) {
            $("." + division_id + ' select').val('').trigger('change');
        }
    }

    function addressLabelChange(label_style, formElementCount) {
        if (label_style == 'inlineLabels') {
            $('.formElement_' + formElementCount + ' :input').each(function() {
                $(this).closest('.form-group').find('label').css("display", 'none');
                ship_label = $(this).closest('.form-group').find('label').text();
                if (ship_label == 'Country') {
                    $(this).find('option:first-child').text(ship_label);
                } else {
                    $(this).attr('placeholder', ship_label);
                }
            });
        } else {
            $('.formElement_' + formElementCount + ' :input').each(function() {
                $(this).closest('.form-group').find('label').css("display", 'block');
                ship_label = $(this).closest('.form-group').find('label').text();
                if (ship_label == 'Country') {
                    $(this).find('option:first-child').text('- Country -');
                } else {
                    $(this).attr('placeholder', '');
                }
            });
        }
    }

    $('.payment_element').change(function() {
        var value_filled = 1;
        $(".payment_element").each(function(index) {
            if ($(this).val().trim() == '') {
                value_filled = 0;
            }
        });
        if (value_filled == 1) {
            swal({
                title: "<div class='loader' style='width:100px;height:100px;'></div> <h4> " + "Processing..." + " </h4>",
                html: true,
                showConfirmButton: false
            });
            Stripe.card.createToken($('#formGeneratorForm'), stripeResponseHandler);
        }
    });

    function payment_calculation() {
        var additional_price = 0.00;
        $(".form_container div[class^='formElement']").each(function() {
            if ((!$(this).attr("id")) && ($(this).hasClass('radio') || $(this).hasClass('checkbox-multi') || $(this).hasClass('select'))) {
                eCount = $(this).data('count');
                if ($(this).hasClass('radio')) {
                    var select_value = $(this).find("input:checked").val();
                    if (typeof formData['formElements'][eCount]['elementCost'] !== 'undefined' && typeof formData['formElements'][eCount]['elementCost'][select_value] !== 'undefined') {
                        additional_price += parseFloat(formData['formElements'][eCount]['elementCost'][select_value]);
                    }
                } else if ($(this).hasClass('checkbox-multi')) {
                    $.each($("input[name='" + formData['formElements'][eCount]['label'] + "']:checked"), function() {
                        if (typeof formData['formElements'][eCount]['elementCost'] !== 'undefined' && typeof formData['formElements'][eCount]['elementCost'][$(this).val()] != 'undefined') {
                            additional_price += parseFloat(formData['formElements'][eCount]['elementCost'][$(this).val()]);
                        }
                    });
                } else if ($(this).hasClass('select')) {
                    var select_value = $(this).find('select').val();
                    if (typeof formData['formElements'][eCount]['elementCost'] !== 'undefined' && typeof formData['formElements'][eCount]['elementCost'][select_value] != 'undefined') {
                        additional_price += parseFloat(formData['formElements'][eCount]['elementCost'][select_value]);
                    }
                }
            }
        });

        var stripePayment = 0.00;
        if (typeof formData['payment_integration'] !== 'undefined' && typeof formData['payment_integration']['payment_cost'] !== 'undefined') {
            stripePayment = parseFloat(formData['payment_integration']['payment_cost']);
            if (typeof formData['payment_integration']['price_change'] !== 'undefined' && formData['payment_integration']['price_change'] == 'yes') {
                if (typeof $('#stripePayment').val() !== 'undefined') {
                    stripePayment = parseFloat($('#stripePayment').val());
                }
            }
        }

        var combined_payment = stripePayment + additional_price;
        return combined_payment.toFixed(2);
    }

    window.onbeforeunload = function() {
        $.each(fileuploaded, function(i, val) {
            $.each(val, function(img, img_val) {
                if (img == 'id') {
                    $.ajax({
                        url: '/ajaxcall/imagedelete',
                        data: { image_id: val.id },
                        success: function(data) {}
                    });
                }
                if (img == 'images' || img == 'files') {
                    $.each(img_val, function(img_arr_i, img_arr_val) {
                        image_id = img_arr_val.id;
                        $.ajax({
                            url: '/ajaxcall/imagedelete',
                            data: { image_id: image_id },
                            success: function(data) {}
                        });
                    });
                }
            });
        });
    };

    /****************** Add More Element Logic ******************/
    $(document).on('click , dblclick', '.add_new', function(e) {
        curele = $(this).attr('data-elementcount');
        ele_len = $(this).closest('.add_more_element').find('.form-group').length;
        if (ele_len == 1) {
            $('.formElement_' + curele + ':first').prepend('<span class="field-close" data-elementcount="' + curele + '"></span>')
        }
        duplicate_html = $('.formElement_' + curele + ':first').clone();
        $(this).closest('.add_more_element').find('.element_holder').append(duplicate_html).html();
        iframe_resize('no', 'no', 'initial');
    });
    $(document).on('click', '.add_more_element .field-close', function() {
        ele_len = $(this).closest('.element_holder').find('.form-group').length;
        curele = $(this).attr('data-elementcount');
        if (ele_len > 1) {
            $(this).closest('.form-group').remove();
        }
        if (ele_len == 2) {
            $('.formElement_' + curele + ':first').find('.field-close').remove();
        }
        iframe_resize('no', 'no', 'initial');
    });
    iframe_resize('no', 'no', 'initial');


    // if((typeof formData['captcha_lang'] !== 'undefined')){
    // 	window.innerWidth = 512;
    // 	setTimeout(function(){
    // 		updateGoogleCaptchaLanguage(formData['captcha_lang'],'.form_captcha_div');
    //   }, 200);
    // }
});

function iframe_resize(scrVal, scrl_bottom, scroll_action) {
    var scroll_to = false;
    if (scrVal == 'yes') {
        scroll_to = true;
    }

    if (scroll_action == 'error') {}

    if (scroll_action == 'success') {}

    if (window.location !== window.parent.location) {
        var parenturl = (window.location != window.parent.location) ? document.referrer : document.location;
        var urlArray = document.referrer.split('/');
        if (urlArray.count > 3) {
            urlArray.pop();
            urlArray.pop();
        }
        var url = urlArray.join('/');

        var body = document.body,
            height = Math.max(body.offsetHeight, body.scrollHeight);
        if (parent.postMessage) {
            parent.postMessage({ formid: "NNhKNwI9m8_ImVkSxpYpEw", height: height + 30, scroll_to: scroll_to, scrl_bottom: scrl_bottom }, url);
        }
    } else {
        if (scroll_to) {
            $('html, body').animate({ scrollTop: $('#wizard-validation-form').offset().top }, 'slow');
        }
    }
}

function onSubmit(token) {
    if (window.innerWidth < 1200) {
        var destElementOffset = window.innerWidth;
        iframe_resize('yes', 'yes', 'error')
    }
}
// Update language captcha 
// function updateGoogleCaptchaLanguage(selectedLanguage,selectorRecaptcha) {
//   // Get GoogleCaptcha iframe
//   var iframeGoogleCaptcha = $(selectorRecaptcha).find('iframe');
//   // Get language code from iframe
//   var language = iframeGoogleCaptcha.attr("src").match(/hl=(.*?)&/).pop();
//   // Get selected language code from drop down
//   // var selectedLanguage = $('#captcha_lang').val();
//   // Check if language code of element is not equal by selected language, we need to set new language code
//   if (language !== selectedLanguage) {
//     // For setting new language 
//     iframeGoogleCaptcha.attr("src", iframeGoogleCaptcha.attr("src").replace(/hl=(.*?)&/, 'hl=' + selectedLanguage + '&'));
//   }
// }