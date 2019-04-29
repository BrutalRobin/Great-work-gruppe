/**
 * @param form_object 
 * @returns {boolean} 
 */
function validate(form_object) {
    formstatus = 1;

    var confirm_message = "Bekræft at du vil sende følgende oplysninger:\n\n";

    var input_elements = form_object.querySelectorAll(":required");
    for(var i = 0; i < input_elements.length; i++) {

        var labeltext = input_elements[i].previousElementSibling.textContent;

        if(!input_elements[i].value) {

            display_error(input_elements[i], "Du skal udfylde feltet " + labeltext.toLocaleLowerCase() + "!");
            formstatus = 0;
            return false;

        } else {

            switch(input_elements[i].dataset.validate) {
                case "onlyalpha":
                    if(!isValidAlpha(input_elements[i].value)) {
                        display_error(input_elements[i], "Der må ikke være tal i dette felt!");
                        form_status = 0;
                        return false;
                    }
                    break;
                case "onlynum":
                    if(!isValidNumber(input_elements[i].value)) {
                        display_error(input_elements[i], "Der må kun være tal i dette felt!");
                        form_status = 0;
                        return false;
                    }
                    break;
                case "validemail":
                    if(!isValidEmail(input_elements[i].value)) {
                        display_error(input_elements[i], "Email adressen er ikke gyldig!");
                        form_status = 0;
                        return false;
                    }
                    break;
                case "validemail":
                    if(!isValidLength(input_elements[i].value)) {
                        display_error(input_elements[i], "Nummeret er ikke gyldig!");
                        form_status = 0;
                        return false;
                    }
                    break;
            }

            confirm_message += labeltext + ": " + input_elements[i].value + "\n";
        }
    }

    if(formstatus) {
        if(confirm(confirm_message)) {
            location.href = 'landingpage.html';
            //eller submit form
            //form_object.submit();
        }
    }
}

/**
 * @param input_object
 * @param string 
 */
function display_error(input_object, error_message) {

    if (!input_object.nextElementSibling.classList.contains("text-error")) {

        input_object.insertAdjacentHTML('afterend', '<div class="text-error">' + error_message + '</div>');

        input_object.classList.add("field-error");

        input_object.onkeypress = function () {
            if (input_object.nextElementSibling.classList.contains("text-error")) {

                input_object.nextElementSibling.remove();


                input_object.classList.remove("field-error");
            }
        }
    }
}


function isValidNumber(value) {
    var pattern = /^[0-9]+$/;
    return pattern.test(value);
}

function isValidAlpha(value) {
    var pattern = /^[A-ZÆØÅa-zæøå ]+$/;
    return pattern.test(value);
}

function isValidEmail(value) {
    var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
}

function isValidLength(value, min, max) {
    var pattern = RegExp('^[0-9A-Za-z@#$%]{'+min+','+max+'}$');
    return pattern.test(value);
}

let cancel = document.getElementById('cancel')
cancel.onclick = function(){
    document.getElementById("contactform").reset();
};