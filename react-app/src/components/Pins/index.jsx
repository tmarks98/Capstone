import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import EditPin from "../EditPin";


export function PinFeed() {
  const dispatch = useDispatch();
  const [isEditOpen, setIsEditOpen] = useState(false);

  useEffect(() => {
    dispatch(thunkGetPins());
  }, [dispatch]);

  const pinsObj = useSelector((state) => state.pins);
  // console.log('pinsObj', pinsObj)
  const pinValues = Object.values(pinsObj.pins);
  // console.log('pinsValue', pinValues)
  const handleEditClick = () => {
    setIsEditOpen(true);
};

  return (
    <div>
      <div style={{display: 'grid'}}>
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
              <button onClick={handleEditClick}>Edit</button>
              {isEditOpen && <EditPin pin={pin} onClose={() => setIsEditOpen(false)} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
