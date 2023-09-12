import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePinButton from "../CreatePinButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Navigation.css";

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
        </div>
      )}
    </ul>
  );
}

export default Navigation;
