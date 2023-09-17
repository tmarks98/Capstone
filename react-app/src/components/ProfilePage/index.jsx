import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import { useSelector } from "react-redux";

export default function ProfilePage() {
    const history = useHistory();
  const user = useSelector((state) => state.session.user);

  return (
    <div className="profile-page">
      <div className="profile-page-pic">
        <img className='pfp-img' src={user.profilePic || 'https://wallpapers-clan.com/wp-content/uploads/2023/05/cool-pfp-19.jpg'} alt="" />
        {console.log("EEEEEEEEEE", user)}
      </div>
      <div className='pfp-username'>
        {user.username}
      </div>
      <div className='pfp-bio'>
        {user.bio}
      </div>
      <div className="pfp-pins-boards-bar">
        <div className="pfp-pins-bar" onClick={() => history.push("/mypins")}>
            <div>My Pins</div>
        </div>
        <div className="pfp-boards-bar" onClick={() => history.push("/myboards")}>
            <div>My Boards</div>
        </div>
      </div>
    </div>
  );
}
