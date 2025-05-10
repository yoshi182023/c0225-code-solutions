import './App.css';
import { useState } from 'react';
import { Modal } from './Modal';
function App() {
  // Add a call to the useRef hook with a default value of null
  // and assign its value to a variable named modal.
  // const modal = useRef<HTMLDialogElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  // function handleOpen() {
  //   console.log('querySelector', document.querySelector('dialog'));
  //   // exactly the same, querying the dom element
  //   console.log('modal', modal);
  //   modal.current?.showModal();
  // }

  // function handleClose() {
  //   modal.current?.close();
  // }

  // function handleDelete() {
  //   alert("I've been deleted");
  //   modal.current?.close();
  // }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleDelete() {
    alert("I've been deleted");
    setIsOpen(false);
  }

  // The variable modal can now be used to manipulate the dialog element,
  // using its current property. React will set the value of modal.
  // current to the DOM object, similar to if you had called document.querySelector.
  return (
    <>
      <button onClick={handleOpen}> Delete Me!</button>
      {/* close by default */}
      {/* a child to my app, the method open/close belong to my dialog(child) element */}
      {/* queey this element, save a reference  */}
      {/* <dialog ref={modal}>
        {/* assgin the variable, modal will be used as our reference */}
      {/* useeffet run when the components get mounted  */}
      <Modal isOpen={isOpen} onClose={handleClose}>
        <p>Are you sure you want to delete this?</p>
        <button onClick={handleClose}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
        {/* </dialog> */}
      </Modal>
    </>
  );
}

export default App;
