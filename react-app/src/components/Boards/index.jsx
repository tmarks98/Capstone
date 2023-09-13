import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetBoards } from "../../store/board";
import CreateBoard from "../CreateBoard";


export function MyBoards() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetBoards());
  }, [dispatch]);

  const boardsObj = useSelector((state) => state.boards);
  // const pinsObj1 = useSelector((state) => state.pins.pins);
//   console.log('boards', boardsObj)
  const boardValues = Object.values(boardsObj.boards);
  console.log('board values', boardValues)
  // console.log('pinsValue', boardValues)

  return (
    <div>
      <CreateBoard />
      <div>
        {boardValues.map((board) => {
          return (
            <div>
              <img style={{ width: "200px" }} src={board.coverpic} alt="" />
              <div>
                <p>
                  {board.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
