import React, { useState } from "react";
import EditPin from "../EditPin";
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

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  const onDelete = () => {
    setIsDeleted(true);
  };

  return (
    <div>
      <div key={pin.id} className="each-my-pin">
        <img className="each-my-pin-img" id="mypin-img-pin" src={url} alt="" />
        <div className="each-my-pin-title">
          <p>{title}</p>
        </div>
        <div className="each-my-pin-body">
          <p>{body}</p>
        </div>
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
