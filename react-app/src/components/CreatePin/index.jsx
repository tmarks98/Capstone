import React, { useEffect, useState } from "react";
import { thunkPostPins } from "../../store/pin";
import { useDispatch, useSelector } from "react-redux";

export function CreatePin () {
    const dispatch = useDispatch;
    const pins = useSelector((state) => state.pins.pins)
    console.log('eee333', pins)
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(thunkPostPins)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <div>main image</div>
                <input 
                    type="file"
                    className="hide"
                    accept="image/*"
                    multiple={false}
                    onClick={(e) => e.target.value = null}
                />
                </div>
            <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}