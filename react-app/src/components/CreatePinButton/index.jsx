import { useHistory } from "react-router-dom";
import { BiPlusCircle } from 'react-icons/bi'


export default function CreatePinButton() {
  let history = useHistory();

  return (
    <div onClick={() => history.push("/pins/new")} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '75px', height: '30px', fontSize: '18px', fontWeight: 'bolder'}}>
      <p>Create</p>
      <BiPlusCircle size={17}/>
    </div>
  );
}