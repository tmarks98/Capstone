import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkEditPins } from '../../store/pin';

function EditPin({ pin }) {
    const dispatch = useDispatch();
    console.log('444', pin)
    const [formData, setFormData] = useState({
        main_pic: pin.mainPic,
        title: pin.title,
        body: pin.body,
    });
    console.log('eeeee', pin)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(thunkEditPins(pin.id, formData));
    };

    return (
        <div>
            <h2>Edit Pin</h2>
            <form onSubmit={handleSubmit}>
                <label>Main Picture URL:</label>
                <input
                    type="text"
                    name="main_pic"
                    value={formData.main_pic}
                    onChange={handleChange}
                />

                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <label>Body:</label>
                <textarea
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditPin;