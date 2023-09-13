import React, { useState } from "react";
import EditBoard from "../EditBoard";
import { useRef } from "react";
import OpenModalButton from "../OpenModalButton";
import DeleteBoard from "../DeleteBoard";

export function MyBoards({ board }) {
  const ulRef = useRef();
  const [showMenu, setShowMenu] = useState(false);
  const [coverpic, setCoverpic] = useState(board.coverpic);
  const [title, setTitle] = useState(board.title);
  const [isBoardDeleted, setIsBoardDeleted] = useState(false)
  console.log('isBoardDeleted??', isBoardDeleted)
  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  const onBoardDelete = () => {
    setIsBoardDeleted(true);
  }
  
  return (
    <div>{console.log('onBoardDelete', onBoardDelete)}
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
          <OpenModalButton
            buttonText="Delete"
            onItemClick={closeMenu}
            modalComponent={<DeleteBoard board={board} onDelete={onBoardDelete}/>}
          />
        </div>
      </div>
    </div>
  );
}
