// At the top of form-values.ts, define an interface named FormElements that extends
// an HTMLFormControlsCollection.
interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
// assign a type of HTMLFormElement to the variable that stores the DOM reference to the contact form.
const $form = document.querySelector('#contact-form') as HTMLFormElement;

$form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // prevent form from being submitted normally
  const $formElements = $form.elements as FormElements;
  const formValues = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };

  console.log(formValues);
  // console.log($formElements);
});
