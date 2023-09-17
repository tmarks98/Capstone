import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import CreatePinButton from "../CreatePinButton";
import "./Navigation.css";
import { TbSquareRoundedLetterS } from "react-icons/tb"; 

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="nav-bar">
      <div className="nav-bar-left-side">
        <NavLink exact to="/">
          <TbSquareRoundedLetterS size={30} className='nav-bar-logo' />
        </NavLink>
        <div>{sessionUser && <CreatePinButton />}</div>
      </div>
      {isLoaded && (
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      )}
    </div>
  );
}

export default Navigation;
