import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePinButton from "../CreatePinButton";
import "./Navigation.css";
import CreateBoardButton from "../CreateBoardButton"

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      {isLoaded && (
        <div>
          <div>
            <ProfileButton user={sessionUser} />
          </div>
          <div>{sessionUser && <CreatePinButton />}</div>
          <div>{sessionUser && <CreateBoardButton />}</div>
        </div>
      )}
    </ul>
  );
}

export default Navigation;
