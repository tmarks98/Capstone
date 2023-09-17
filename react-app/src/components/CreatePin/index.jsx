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
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");
  const [formData, setFormData] = useState({
    user_id: "",
    main_pic: "",
    title: "",
    body: "",
  });

  const validateTitle = (title) => {
    if (title.length < 3 || title.length > 35) {
      setTitleError("Title must be between 3 and 35 characters.");
      return false;
    }
    setTitleError("");
    return true;
  };

  const validateBody = (body) => {
    if (body.length < 3 || body.length > 120) {
      setBodyError("Body must be between 3 and 120 characters.");
      return false;
    }
    setBodyError("");
    return true;
  };

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
    const isTitleValid = validateTitle(formData.title);
    const isBodyValid = validateBody(formData.body);

    if (isTitleValid && isBodyValid) {
      formData.user_id = sessionUser.id;
      dispatch(thunkPostPins(formData));
      history.push("/mypins");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="create-pin-form">
        <input type="hidden" name="user_id" value={sessionUser.id} />
        <div className="create-pin-form0">
          Create a New Pin
        </div>
        <div className="create-pin-form1">
        <input
        className="create-pin-form11"
          placeholder="Image URL"
          type="text"
          name="main_pic"
          value={formData.main_pic}
          onChange={handleImageChange}
        />
        </div>
        <div className="create-pin-form2">
        {imagePreview && (
          <img
          className="create-pin-form22"
            src={imagePreview}
            alt="Image Preview"
          />
        )}
        </div>
        <div className="create-pin-form3">
        <input
        className="create-pin-form33"
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        </div>
        <div className="create-pin-form333">
        {titleError && <div className="error">{titleError}</div>}
        </div>
        <div className="create-pin-form4">
        <input
        className="create-pin-form44"
          placeholder="Description"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
        </div>
        <div className="create-pin-form444">
        {bodyError && <div className="error">{bodyError}</div>}
        </div>
        <div>
        <button className="create-pin-form5" type="submit">Create Pin</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePin;
