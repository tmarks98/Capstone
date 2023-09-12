import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetPins } from "../../store/pin";
import EditPin from "../EditPin";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRef } from "react";
import DeletePin from "../DeletePin";

export function MyPins() {
    const history = useHistory();
    const dispatch = useDispatch();
    const pinsObj = useSelector((state) => state.pins);
    const pinValues = Object.values(pinsObj.pins);
    const sessionUser = useSelector((state) => state.session.user);
    const pinOwner = pinValues.filter((pin) => pin.userId === sessionUser.id);
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

    return (
        <div>
      <div>
        {pinOwner.map((pin) => {
          return (
            <div key={pin.id}>
              <img style={{ width: "200px" }} src={pin.mainPic} alt="" />
              <div>
                <p>
                  {pin.title}
                </p>
                <p>{pin.body}</p>
              </div>
              <OpenModalButton
              buttonText="Edit"
              onItemClick={closeMenu}
              modalComponent={<EditPin pin={pin}/>}
            />
            <OpenModalButton
              buttonText="Delete"
              onItemClick={closeMenu}
              modalComponent={<DeletePin pin={pin}/>}
            />
            </div>
          );
        })}
      </div>
    </div>
    )
}