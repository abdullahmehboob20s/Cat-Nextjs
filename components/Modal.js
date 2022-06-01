import React from "react";
import styles from "scss/components/Modal.module.scss";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Modal({ children, img, shouldShow, setModalState }) {
  const modalRef = OutsideClickDetector(() => {
    setModalState(false);
  });

  return (
    <>
      {/* BLACK SCREEN */}
      <div className={`black-screen ${shouldShow ? "show" : ""}`}></div>

      {/* MODAL */}
      <div
        className={`${styles.modal} ${shouldShow ? styles.show : ""}`}
        ref={modalRef}
      >
        <button
          className={`${styles.crossIcon}`}
          onClick={() => setModalState(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M16.34 9.322a1 1 0 1 0-1.364-1.463l-2.926 2.728L9.322 7.66A1 1 0 0 0 7.86 9.024l2.728 2.926l-2.927 2.728a1 1 0 1 0 1.364 1.462l2.926-2.727l2.728 2.926a1 1 0 1 0 1.462-1.363l-2.727-2.926l2.926-2.728Z" />
              <path
                fillRule="evenodd"
                d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
                clipRule="evenodd"
              />
            </g>
          </svg>
        </button>

        <img src={img} alt="" />
        {children}
      </div>
    </>
  );
}

export default Modal;
