import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetBoards } from "../../store/board";
import OpenModalButton from "../OpenModalButton";
import { useRef } from "react";
import EditBoard from "../EditBoard";


export function MyBoards({ board }) {
  const dispatch = useDispatch();
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [coverpic, setCoverpic] = useState(board.coverpic);
  const [title, setTitle] = useState(board.title);

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  return (
    <div>
      <div key={board.id}>
        <img style={{ width: "200px" }} src={coverpic} alt="" />
        <div>
          <p>{title}</p>
        </div>
        <OpenModalButton
            buttonText="Edit"
            modalComponent={
              <EditBoard
                board={board}
                coverpic={coverpic}
                setCoverpic={setCoverpic}
                title={title}
                setTitle={setTitle}
              />
            }
          />
      </div>
    </div>
  );
}
