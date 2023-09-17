import React from "react";
import { useModal } from "../../context/Modal";
import "./index.css";

export function PinsFeed({ pin }) {
  const { setModalContent, closeModal } = useModal();

  const openModal = () => {
    setModalContent(
      <div className="pin-feed-modal">
        <div className="fsr1">
          <img className="pin-feed-modal-img" src={pin.mainPic} alt="" />
        </div>
        <div className="fsr2">{pin.title}</div>
        <div className="fsr3">{pin.body}</div>
        <div className="fsr4">
          <button onClick={closeModal} className="pin-feed-modal-close-button">
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="each-feed-pin">
        <img
          className="each-feed-pin-img"
          src={pin.mainPic}
          alt=""
          onClick={openModal}
        />
      </div>
    </div>
  );
}
