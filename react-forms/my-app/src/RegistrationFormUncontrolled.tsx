export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const formData = new FormData(e.target);
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
        Username: <input name="username" defaultValue="Some initial value" />
      </label>
      <label>
        Password: <input name="password" defaultValue="Some initial value" />
      </label>
      <button type="submit">Submit </button>
    </form>
  );
}
