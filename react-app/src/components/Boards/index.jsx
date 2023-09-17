import React, { useState } from "react";
import EditBoard from "../EditBoard";
import { useRef } from "react";
import OpenModalButton from "../OpenModalButton";
import DeleteBoard from "../DeleteBoard";
import "./index.css";

export function MyBoards({ board }) {
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [coverpic, setCoverpic] = useState(board.coverpic);
  const [title, setTitle] = useState(board.title);
  const [isBoardDeleted, setIsBoardDeleted] = useState(false);

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  const onBoardDelete = () => {
    setIsBoardDeleted(true);
  };

  return (
    <div className="board-page">
      <div key={board.id} className="my-board-div">
        <img id="my-board-coverpic" src={coverpic} alt="" />
        <div className="lkll4">
          <p>{title}</p>
        </div>
        <div className="edit-board-buttons">
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
          <OpenModalButton
            buttonText="Delete"
            onItemClick={closeMenu}
            modalComponent={
              <DeleteBoard board={board} onDelete={onBoardDelete} />
            }
          />
        </div>
      </div>
    </div>
  );
}
