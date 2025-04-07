export default function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    // const formData = new FormData(e.target);
    console.log('e,cuurebtTarget', e.currentTarget);
    const formData = new FormData(e.currentTarget);

    // Or you can work with it as a plain object:
    // const formValues = Object.fromEntries(formData.entries());

    const { username, password } = Object.fromEntries(formData.entries());

    console.log({ username, password });
    console.log('Uncontrolled form values:', Object.fromEntries(formData));
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      {/* input name has to match const {(username, password)} */}
      <label>
        {/* if you don't have handle submit, 是通过form 上的name arrtirbute 实现的gather the form, put it in a querry parameter and redirect */}
        Username:{' '}
        <input type="text" name="username" defaultValue="Some initial value" />
      </label>
      <label>
        Password: <input name="password" defaultValue="Some initial value" />
      </label>
      {/* the defualt action for button is "submit" */}
      <button type="submit">Submit </button>
    </form>
  );
}
