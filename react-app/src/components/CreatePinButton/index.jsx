import { useHistory } from "react-router-dom";
import { BiPlusCircle } from 'react-icons/bi'
import './index.css'

export default function CreatePinButton() {
  let history = useHistory();

  return (
    <div onClick={() => history.push("/pins/new")} className='create-pin-button-div'>
      <p>Create</p>
      <BiPlusCircle size={21}/>
    </div>
  );
}