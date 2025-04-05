import { ReactNode, useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ isOpen, onClose, children }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modal.current?.showModal();
    } else {
      modal.current?.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={modal} onClick={onClose}>
      {children}
      {/* <p>Are you sure you want to delete this?</p> */}
      {/* <button onClick={handleClose}>Close</button>
  <button onClick={handleDelete}>Delete</button> */}
    </dialog>
  );
}
