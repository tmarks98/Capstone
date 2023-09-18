import React, { useState } from "react";
import { thunkPostBoards } from "../../store/board";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

export function CreateBoard({ onClose }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const sessionUser = useSelector((state) => state.session.user);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    user_id: "",
    coverpic: "",
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageURL = e.target.value;
    setFormData({ ...formData, coverpic: imageURL });
    setImagePreview(imageURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.user_id = sessionUser.id;
    dispatch(thunkPostBoards(formData)).then(() => {
      onClose();
      closeModal();
    });
  };

  return (
    <div className="create-board-modal">
      <div className="create-board-title">
        <h2>Create a New Board</h2>
      </div>
      <div className="create-board-form">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="user_id" value={sessionUser.id} />
          <div className="gfd1">
            <input
              className="gfd11"
              placeholder="Image URL"
              type="text"
              name="coverpic"
              value={formData.coverpic}
              onChange={handleImageChange}
            />
          </div>
          <div className="gfd2">
            {imagePreview && (
              <img
                className="gfd22"
                src={imagePreview}
                alt=" - Invalid Link! "
              />
            )}
          </div>
          <div className="gfd3">
            <input
            placeholder="Title"
              className="gfd33"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="gfd4">
            <button className="gfd44" type="submit">
              Create Board
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBoard;
