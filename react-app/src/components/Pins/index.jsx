import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import EditPin from "../EditPin";
import OpenModalButton from "../OpenModalButton";
import { useState } from "react";
import { useRef } from "react";
import DeletePin from "../DeletePin";

export function MyPins({ pin }) {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const [url, setUrl] = useState(pin.mainPic);
  const [title, setTitle] = useState(pin.title);
  const [body, setBody] = useState(pin.body);

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };
  console.log("single pin render");
  return (
    <div>
      <div>
        <div key={pin.id}>
          <img style={{ width: "200px" }} src={url} alt="" />
          <div>
            <p>{title}</p>
            <p>{body}</p>
          </div>
          <OpenModalButton
            buttonText="Edit"
            onItemClick={closeMenu}
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
            modalComponent={<DeletePin pin={pin} />}
          />
        </div>
      </div>
    </div>
  );
}
