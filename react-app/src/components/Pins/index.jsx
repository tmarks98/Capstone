import React, { useState } from "react";
import EditPin from "../EditPin";
import { useModal } from "../../context/Modal";
import { useRef } from "react";
import OpenModalButton from "../OpenModalButton";
import DeletePin from "../DeletePin";
import "./index.css";

export function MyPins({ pin }) {
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [url, setUrl] = useState(pin.mainPic);
  const [title, setTitle] = useState(pin.title);
  const [body, setBody] = useState(pin.body);
  const [isDeleted, setIsDeleted] = useState(false);
  const { setModalContent, closeModal } = useModal();

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  const onDelete = () => {
    setIsDeleted(true);
  };

  const openModal = () => {
    setModalContent(
      <div className="pin-feed-modal">
        <div className="fsr1">
          <img className="pin-feed-modal-img" src={pin.mainPic} alt="" />
        </div>
        <div className="fsr2">{title}</div>
        <div className="fsr3">{body}</div>
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
      <div key={pin.id} className="each-my-pin">
        <img className="each-my-pin-img" onClick={openModal} id="mypin-img-pin" src={url} alt="" />
        <div className="edit-delete-button-mypin">
        <OpenModalButton
          buttonText="Edit"
          modalComponent={
            <EditPin
              pin={pin}
              url={url}
              setUrl={setUrl}
              title={title}
              setTitle={setTitle}
              body={body}
              setBody={setBody}
            />
          }
        />
        <OpenModalButton
          buttonText="Delete"
          onItemClick={closeMenu}
          modalComponent={<DeletePin pin={pin} onDelete={onDelete} />}
        />
        </div>
      </div>
    </div>
  );
}
