import React, { useState } from "react";
import { thunkPostBoards } from "../../store/board";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function CreateBoard() {
  const history = useHistory();
  const dispatch = useDispatch();
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
    dispatch(thunkPostBoards(formData));
  };

  return (
    <div>
      <h2>Create a New Board</h2>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="user_id" value={sessionUser.id} />
        <input
          placeholder="Image URL"
          type="text"
          name="coverpic"
          value={formData.coverpic}
          onChange={handleImageChange}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Image Preview"
            style={{ maxWidth: "400px", maxHeight: "400px" }}
          />
        )}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <button type="submit">Create Board</button>
      </form>
    </div>
  );
}

export default CreateBoard