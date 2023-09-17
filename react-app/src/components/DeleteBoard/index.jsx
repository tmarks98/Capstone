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
    onDelete();
    dispatch(thunkDeleteBoard(board.id));
    onDelete();
    closeModal();
  };

  return(
    <div className="confirm-delete-container">
      <h2>Are you sure you want to delete your board?</h2>
      <div className="confirm-delete-buttons-container">
        <button
        className="yes-button"
        onClick={handleDelete}
        >Ok</button>
        <button
        className="no-button"
        onClick={closeModal}
        >Cancel</button>
      </div>
    </div>
  )
}

export default DeleteBoard;
