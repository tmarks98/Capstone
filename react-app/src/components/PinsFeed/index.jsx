import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import { useRef } from "react";


export function PinFeed() {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    dispatch(thunkGetPins());
  }, [dispatch]);

  const closeMenu = (e) => {
    if (!ulRef.current.contains(e.target)) {
      setShowMenu(false);
    }
  };

  const pinsObj = useSelector((state) => state.pins);
  // const pinsObj1 = useSelector((state) => state.pins.pins);
  // console.log('pinsObj1111', pinsObj1)
  const pinValues = Object.values(pinsObj.pins);
  // console.log('pinsValue', pinValues)
  const handleEditClick = () => {
    setIsEditOpen(true);
};

  return (
    <div>
      <div>
        {pinValues.map((pin) => {
          return (
            <div>
              <img style={{ width: "200px" }} src={pin.mainPic} alt="" />
              <div>
                <p>
                  {pin.title}
                </p>
                <p>{pin.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
