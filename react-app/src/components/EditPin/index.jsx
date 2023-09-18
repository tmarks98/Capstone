import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkEditPins } from "../../store/pin";
import { useModal } from "../../context/Modal";
import './index.css'

function EditPin({ pin, url, setUrl, title, setTitle, body, setBody }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const [localUrl, setLocalUrl] = useState(url);
  const [localTitle, setLocalTitle] = useState(title);
  const [localBody, setLocalBody] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user_id: pin.userId,
      main_pic: localUrl,
      title: localTitle,
      body: localBody,
    };
    dispatch(thunkEditPins(formData, pin.id));
    setBody(localBody);
    setUrl(localUrl);
    setTitle(localTitle);
    closeModal();
  };
  console.log("modal render");
  return (
    <div className="edit-pin-modal">
      <div className="asdfgh">
        <h2>Edit Pin</h2>
      </div>
      <div className="edit-pin-form">
        <form onSubmit={handleSubmit}>
          <div className="edit-pin-form1">
          <input
          className="edit-pin-form11"
            placeholder="Image URL"
            type="text"
            name="main_pic"
            value={localUrl}
            onChange={(e) => {
              setLocalUrl(e.target.value);
            }}
          />
          </div>
          <div className="edit-pin-form2">
            <input
            className="edit-pin-form22"
              placeholder="Title"
              type="text"
              name="title"
              value={localTitle}
              onChange={(e) => {
                setLocalTitle(e.target.value);
              }}
            />
          </div>
          <div className="edit-pin-form3">
            <textarea
            className="edit-pin-form33"
              placeholder="Body"
              name="body"
              value={localBody}
              onChange={(e) => {
                setLocalBody(e.target.value);
              }}
            />
          </div>
          <div className="edit-pin-form4">
            <button className="edit-pin-form44" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPin;
