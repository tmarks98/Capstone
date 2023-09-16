import { MyBoards } from "../Boards";
import { thunkGetBoards } from "../../store/board";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateBoard from "../CreateBoard";
import ProfilePage from "../ProfilePage";

export default function BoardViews() {
  const dispatch = useDispatch();
  const boardsObj = useSelector((state) => state.boards);
  const boardValues = Object.values(boardsObj.boards);
  const sessionUser = useSelector((state) => state.session.user);
  const boardOwner = boardValues.filter((board) => board.userId === sessionUser.id);


  useEffect(() => {
    dispatch(thunkGetBoards());
  }, [dispatch]);

  return (
    <div>
      <ProfilePage />
        <CreateBoard />
      {boardOwner.map((ele) => {
        return <MyBoards board={ele} />;
      })}
    </div>
  );
}
