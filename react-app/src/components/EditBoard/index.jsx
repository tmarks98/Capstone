import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkEditBoards } from "../../store/board";
import { useModal } from "../../context/Modal";
import './index.css'

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
    <div className="edit-board-modal">
      <div className="edit-board-title">
      <h2>Edit Board</h2>
      </div>
      <div className="edit-board-form">
      <form onSubmit={handleSubmit}>
        <div className="asdf1">
        <input
        placeholder="Cover Picture URL"
          type="text"
          className="asdf11"
          name="coverpic"
          value={localCoverpic}
          onChange={(e) => {
            setLocalCoverpic(e.target.value);
          }}
        />
        </div>
        <div className="asdf2">
        <input
        placeholder="Title"
          type="text"
          className="asdf22"
          name="title"
          value={localTitle}
          onChange={(e) => {
            setLocalTitle(e.target.value);
          }}
        />
        </div>
        <div className="asdf3">
        <button className="asdf33" type="submit">Save Changes</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default EditBoard;
