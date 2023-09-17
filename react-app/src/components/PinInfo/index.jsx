import React from "react-redux";
import { useHistory } from "react-router-dom";
import OpenModalButton from "../OpenModalButton";
import "./index.css";


export default function PinInfo() {
    let history = useHistory();


    return (
        <div>
            <OpenModalButton modalComponent={<CreateBoard />}
      />
        </div>
    )
}