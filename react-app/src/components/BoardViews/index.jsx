import { MyBoards } from "../Boards";
import { thunkGetBoards } from "../../store/board";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CreateBoard from "../CreateBoard";
import ProfilePage from "../ProfilePage";
import Masonry from "react-masonry-css";
import CreateBoardButton from "../CreateBoardButton";
import "./index.css";

export default function BoardViews() {
  const dispatch = useDispatch();
  const boardsObj = useSelector((state) => state.boards);
  const boardValues = Object.values(boardsObj.boards);
  const sessionUser = useSelector((state) => state.session.user);
  const boardOwner = boardValues.filter(
    (board) => board.userId === sessionUser.id
  );

  const columnsObj = {
    default: 7,
    1750: 6,
    1500: 5,
    1265: 4,
    1020: 3,
    775: 2,
    525: 1,
  };

  useEffect(() => {
    dispatch(thunkGetBoards());
  }, [dispatch]);

  return (
    <div>
      <ProfilePage />
      <CreateBoardButton />
      <Masonry
        breakpointCols={columnsObj}
        className="my-pinfeed-masonry-grid1"
        columnClassName="my-pinfeed-masonry-grid_column1"
      >
        {boardOwner.length ? (boardOwner.map((ele) => {
          return <MyBoards key={ele.id} board={ele} />;
        })) : <div style={{width: '430px'}}>You currently have no boards, click above to create your first!</div>}
      </Masonry>
    </div>
  );
}
