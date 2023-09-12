import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkDeletePin } from "../../store/pin";
import './index.css'
import { useModal } from "../../context/Modal";

function DeletePin({ pin }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  console.log('eeee1', pin)
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeletePin(pin.id));
    closeModal();
  };

  return(
    <div id="confirm-delete-container">
      <h2>Are you sure you want to delete your pin?</h2>
      <div id="confirm-delete-buttons-container">
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

export default DeletePin;
