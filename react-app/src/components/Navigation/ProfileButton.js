import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    closeMenu();
  };

  const profilePicButton = () => {
    closeMenu();
    history.push('/mypins')
  }

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div style={{backgroundColor: 'rgb(113, 123, 106)'}}>
      {user ? (<img className='pfp-menu-pic' onClick={() => history.push("/mypins")} src={user.profilePic || 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-19.jpg'} alt="" />):''}
      <button className='img-bttn-pfp' onClick={openMenu}>
        <MdOutlineKeyboardArrowDown size={45} />
      </button>
      <div className={ulClassName} ref={ulRef}>
        {user ? (
          <>
              <p onClick={profilePicButton}>My profile</p>
              <button className="ertf" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <div>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileButton;
