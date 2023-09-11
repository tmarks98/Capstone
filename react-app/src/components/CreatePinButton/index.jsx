import { useHistory } from "react-router-dom";


export default function CreatePinButton() {
  let history = useHistory();

  return (
    <h2 onClick={() => history.push("/pins/new")}>
      Create a New Pin
    </h2>
  );
}