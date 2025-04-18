import { useState } from 'react';
export default function RegistrationFormControlled() {
  // You will need two useState variables, one for the username and one for the password.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    console.log('Controlled');
    // 因为我们useState有了两个variable
    // creating an object literal the username field is the username variable
    // the password field is the password variable
    console.log({ username, password });
  }
  return (
    <form method="post" onSubmit={handleSubmit}>
      {/* input name has to match const {(username, password)} */}
      <label>
        Username:{' '}
        <input
          value={username ?? ''}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
        />
      </label>
      {/* Remember to pass an onChange handler to each input component that updates
      a state's value */}
      <label>
        Password:{' '}
        <input onChange={(e) => setPassword(e.target.value)} name="password" />
      </label>
      <button type="submit">Submit </button>
    </form>
  );
}
