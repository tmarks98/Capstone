import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkEditPins } from "../../store/pin";

function EditPin({ pin, url, setUrl, title, setTitle, body, setBody }) {
  const dispatch = useDispatch();

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
  };
  console.log("modal render");
  return (
    <div>
      <h2>Edit Pin</h2>
      <form onSubmit={handleSubmit}>
        <label>Main Picture URL:</label>
        <input
          type="text"
          name="main_pic"
          value={localUrl}
          onChange={(e) => {
            setLocalUrl(e.target.value);
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

        <label>Body:</label>
        <textarea
          name="body"
          value={localBody}
          onChange={(e) => {
            setLocalBody(e.target.value);
          }}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditPin;
