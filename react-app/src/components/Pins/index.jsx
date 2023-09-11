import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";

export function PinFeed() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(thunkGetPins());
    }, [dispatch]);

    const pinsObj = useSelector((state) => state.pins);
    // console.log('pinsObj', pinsObj)
    const pinValues = Object.values(pinsObj.pins)
    // console.log('pinsValue', pinValues)

    return (
        <div>
            <div>
                {pinValues.map((pin) => {
                    return <div><img style={{width: '200px'}} src={pin.mainPic} alt="" /><p><div>{pin.title}{console.log('eeeeee', pin)}</div>{pin.body}</p></div>
                })}
                hello 
            </div>
        </div>
    )
}