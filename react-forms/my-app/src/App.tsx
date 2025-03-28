import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';
// import EditForm from './EditForm';

function App() {
  return (
    <>
      <p>Uncontrolled</p>
      <RegistrationFormUncontrolled />
      <p>Controlled</p>
      <RegistrationFormControlled />
    </>
  );
}

export default App;
