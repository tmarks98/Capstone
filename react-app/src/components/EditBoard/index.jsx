import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkEditBoards } from "../../store/board";
import { useModal } from "../../context/Modal";

function EditBoard({ board, coverpic, setCoverpic, title, setTitle }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [localCoverpic, setLocalCoverpic] = useState(coverpic);
  const [localTitle, setLocalTitle] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id: board.userId,
      coverpic: localCoverpic,
      title: localTitle,
    };
    dispatch(thunkEditBoards(formData, board.id));
    setCoverpic(localCoverpic);
    setTitle(localTitle);
    closeModal();
  };
  console.log("modal render");
  return (
    <div>
      <h2>Edit Board</h2>
      <form onSubmit={handleSubmit}>
        <label>Cover Picture URL:</label>
        <input
          type="text"
          name="coverpic"
          value={localCoverpic}
          onChange={(e) => {
            setLocalCoverpic(e.target.value);
          }}
        />

        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={localTitle}
          onChange={(e) => {
            setLocalTitle(e.target.value);
          }}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditBoard;
