import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeleteBoard } from "../../store/board";
import { useModal } from "../../context/Modal";
import './index.css'

function DeleteBoard({ board, onDelete }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteBoard(board.id));
    onDelete();
    closeModal();
  };

  return(
    <div id="confirm-delete-board-container">
      <h2>Are you sure you want to delete your board?</h2>
      <div id="confirm-delete-board-buttons-container">
        <button
        id="no-button"
        onClick={closeModal}
        >Cancel</button>
        <button
        id="yes-button"
        onClick={handleDelete}
        >Ok</button>
      </div>
    </div>
  )
}

export default DeleteBoard;
