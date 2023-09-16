import React, { useState } from "react";
import { thunkPostPins } from "../../store/pin";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

export function CreatePin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    user_id: "",
    main_pic: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const imageURL = e.target.value;
    setFormData({ ...formData, main_pic: imageURL });
    setImagePreview(imageURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.user_id = sessionUser.id;
    dispatch(thunkPostPins(formData));
    history.push("/mypins");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-pin-form">
        <input type="hidden" name="user_id" value={sessionUser.id} />
        <input
          placeholder="Image URL"
          type="text"
          name="main_pic"
          value={formData.main_pic}
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
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        <button type="submit">Create Pin</button>
      </form>
    </div>
  );
}

export default CreatePin;
