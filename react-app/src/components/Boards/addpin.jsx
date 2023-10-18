import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkAddPin, thunkGetBoards } from "../../store/board";
import { useModal } from "../../context/Modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./index.css";

const AddPin = ({id}) => {
  const boardsObj = useSelector((state) => state.boards);
  const boardValues = Object.values(boardsObj.boards);
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const history = useHistory();
  const [boardId, setBoardId] = useState("");
  useEffect(() => {
    dispatch(thunkGetBoards());
  }, [dispatch]);

  useEffect(() => {
    const userBoard = boardValues.filter((board) => board.userId === user.id);
    if (userBoard.length > 0) {
      setBoardId(userBoard[0].id);
    }
  }, [boardValues, user.id]);

  const boardArr = Object.values(boardValues);
  const userBoard = boardArr.filter((board) => board.userId === user.id);
  const handleAdd = (e) => {
    const info = {
        board_id: boardId,
        pin_id: id,
      };
      console.log("Pin ID23:", id);

    dispatch(thunkAddPin(info));
    closeModal();
    history.push(`/user/${user.id}`);
  };

  const handleClick = (board) => {
    setBoardId(board.id);
  };

  const handleCreate = () => {
    history.push(`/user/${user.id}`);
    closeModal();
  };

  return (
    <div>
      <h1>Add to your board</h1>
      <div>
        {userBoard.length > 0 ? (
          userBoard.map((board) => (
            <div
              className={`board-names ${board.id === boardId ? "active" : ""}`}
              onClick={() => handleClick(board)}
              key={board.id}
            >
              {board.name}
            </div>
          ))
        ) : (
          <div className="add-to-board" onClick={handleCreate}>
            Create A Board First
          </div>
        )}
      </div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddPin;
