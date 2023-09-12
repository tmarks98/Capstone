import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import { useEffect } from "react";

export default function PinInfo() {
    const pin = useSelector((state) => state.pins.pins)
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetPins(pin.id))
    }, [dispatch, pin.id])

    return (
        <div>
            {pin.title}eeeee
        </div>
    )
}