'use strict';
// assign a type of HTMLFormElement to the variable that stores the DOM reference to the contact form.
const $form = document.querySelector('#contact-form');
$form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from being submitted normally
  const $formElements = $form.elements;
  const formValues = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formValues);
  // console.log($formElements);
});
