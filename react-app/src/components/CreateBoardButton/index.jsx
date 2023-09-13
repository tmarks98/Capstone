import { useHistory } from "react-router-dom";


export default function CreatePinButton() {
  let history = useHistory();

  return (
    <h2 onClick={() => history.push("/myboards")}>
      Create a New Board
    </h2>
  );
}