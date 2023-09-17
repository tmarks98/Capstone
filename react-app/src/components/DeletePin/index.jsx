import React from "react";
import { useDispatch } from "react-redux";
import { thunkDeletePin } from "../../store/pin";
import { useModal } from "../../context/Modal";
import './index.css'

function DeletePin({ pin, onDelete }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete();
    dispatch(thunkDeletePin(pin.id));
    onDelete();
    closeModal();
  };

  return(
    <div className="confirm-delete-pin-container">
      <h2>Are you sure you want to delete your pin?</h2>
      <div className="confirm-delete-pin-buttons-container">
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

export default DeletePin;
