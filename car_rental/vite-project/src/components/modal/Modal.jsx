import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import style from "./modal.module.scss";
import ModalContent from "../modalContent/ModalContent";

function Modal({ car }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add(style["modal-open"]);
    } else {
      document.body.classList.remove(style["modal-open"]);
    }
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className={style.button__open}>
        Learn more
      </button>
      <ReactModal
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={style.custom__modal}
        overlayClassName={style.custom__overlay}
      >
        <ModalContent car={car} />

        <button className={style.button__close} onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </ReactModal>
    </div>
  );
}

export default Modal;
