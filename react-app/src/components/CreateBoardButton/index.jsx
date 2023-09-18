import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";
import CreateBoard from "../CreateBoard";
import OpenModalButton from "../OpenModalButton";
import { thunkGetBoards } from "../../store/board";
import { useDispatch } from "react-redux";
import "./index.css";

export default function CreateBoardButton() {
  const dispatch = useDispatch();
  let history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDataRefresh = () => {
      dispatch(thunkGetBoards());
  };

  return (
    <div className="create-board-button-div">
      <OpenModalButton
        buttonText={
          <>
            Create <BiPlusCircle size={21} />
          </>
        }
        modalComponent={<CreateBoard onClose={() => {
          handleCloseModal();
          handleDataRefresh();
        }} />}
        onModalClose={() => handleDataRefresh()}
      />
    </div>
  );
}
