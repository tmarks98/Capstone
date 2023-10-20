import React from "react";
import { useEffect, useState } from "react";
import { useModal } from "../../context/Modal";
import OpenModalButton from "../OpenModalButton";
import { thunkCheckPinInBoard } from "../../store/test";
import { thunkGetComments } from "../../store/comment";
import { useDispatch } from "react-redux";
import Comments from "../Comments";
import "./index.css";
import AddPin from "../Boards/addpin";
import { useSelector } from "react-redux";

export function PinsFeed({ pin, boardId }) {
  const dispatch = useDispatch();
  const { setModalContent, closeModal } = useModal();
  const [showMenu, setShowMenu] = useState(false)
  const ulClassName = "options-dropdown" + (showMenu ? "" : " hidden");
  const comments = useSelector(state => state.comments.comments)
  console.log('PINNN', pin.comments)



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
        <Comments />
      </div>
    );
  };
  // console.log("Pin ID:", pin.id);
  const openAddPinModal = () => {
    setModalContent(<AddPin id={pin.id} />);
  };

  const checkIfPinIsInBoard = async () => {
    const result = await dispatch(thunkCheckPinInBoard(1, pin.id));
    console.log(result.message);   // This will print the message indicating whether the pin is in the board or not
  };

  return (
    <div>
      <button onClick={checkIfPinIsInBoard}>test</button>
      <div className="each-feed-pin">
        <img
          className="each-feed-pin-img"
          src={pin.mainPic}
          alt=""
          onClick={openModal}
        />
        <button onClick={openAddPinModal}>Add to Board</button>
      </div>
    </div>
  );
}
