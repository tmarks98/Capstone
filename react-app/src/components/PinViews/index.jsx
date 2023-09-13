import { MyPins } from "../Pins";
import { thunkGetPins } from "../../store/pin";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreatePinButton from "../CreatePinButton"

export default function PinViews() {
  const dispatch = useDispatch();
  const pinsObj = useSelector((state) => state.pins);
  const pinValues = Object.values(pinsObj.pins);
  const sessionUser = useSelector((state) => state.session.user);
  const pinOwner = pinValues.filter((pin) => pin.userId === sessionUser.id);

  useEffect(() => {
    dispatch(thunkGetPins());
  }, [dispatch]);

  return (
    <div>
    <CreatePinButton />
      {pinOwner.map((ele) => {
        return <MyPins pin={ele} />;
      })}
    </div>
  );
}
