import { useSelector } from "react-redux";
import PinInfo from "../PinInfo";
import { thunkGetPin } from "../../store/pin";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function PinInfoViews() {
    const { pinId } = useParams;
    const dispatch = useDispatch();
    const pins = useSelector((state) => state.pins);
    console.log('pins1', pinId)

    useEffect(() => {
        dispatch(thunkGetPin(pinId))
    }, [dispatch, pinId])

    return (
        <div>
            <PinInfo />
        </div>
    )
}