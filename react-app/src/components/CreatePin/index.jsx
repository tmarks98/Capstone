import React from "react";
import { thunkPostPins } from "../../store/pin";

export const CreatePin = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }


    return (
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}