import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import pic from './Images/pic(8).jpg'

export function PinFeed() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(thunkGetPins());
    }, [dispatch]);

    const pinsObj = useSelector((state) => state.pins);
    // console.log('pinsObj', pinsObj)
    const pinValues = Object.values(pinsObj.pins)
    console.log('pinsValue', pinValues)

    return (
        <div>
            <div>
                {pinValues.map((pin) => {
                    return <div><img style={{width: '200px'}} src={pic} alt="" /><p><div>{pin.title}</div>{pin.body}{console.log('eeeeee', pin)}</p></div>
                })}
                hello
            </div>
        </div>
    )
}