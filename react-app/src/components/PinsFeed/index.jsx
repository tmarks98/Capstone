import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './index.css'

export function PinsFeed({ pin }) {
  const history = useHistory();

  return (
    <div>
        <div className="each-feed-pin" onClick={() => history.push(`/pins/${pin.id}`)}>
          <img className="each-feed-pin-img" src={pin.mainPic} alt="" />
        </div>
    </div>
  );
}
