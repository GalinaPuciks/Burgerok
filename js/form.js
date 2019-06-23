const orderForm = document.querySelector('#order-form');
const sendButton = document.querySelector('#sendButton');

sendButton.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(orderForm)) {
       const data = {
           name: orderForm.elements.name.value,
           phone: orderForm.elements.phone.value,
           comment: orderForm.elements.comment.value 
       };
       const xhr = new XMLHttpRequest ();
       xhr.responseType = 'json';
       xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
       xhr.send(JSON.stringify(data));
       xhr.addEventListener('load', () => {
           if (xhr.response.status) {
            console.log ('успешно');
           }
       });
    }
});

function validateForm(form) {
    let valid = true;
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }

}