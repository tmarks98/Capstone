// Types

const GET_BOARDS = "GET /api/boards";
const CREATE_BOARD = "POST /api/boards";

// Actions
export function getBoards(boards) {
  return {
    type: GET_BOARDS,
    boards,
  };
}

export function createBoard(board) {
  return {
    type: CREATE_BOARD,
    board,
  };
}

// Thunks
export const thunkGetBoards = () => async (dispatch) => {
  const res = await fetch("/api/boards");
  if (res.ok) {
    const boards = await res.json();
    dispatch(getBoards(boards));
  }
};

export const thunkPostBoards = (board) => async (dispatch) => {
  const res = await fetch("/api/boards/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
  console.log("reeeee", res);
  if (res.ok) {
    const data = await res.json();
    dispatch(createBoard(data));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

// Reducer
const initialState = {
  boards: {},
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARDS: {
      const boardsArr = action.boards.boards;
      let newState = { ...state };
      boardsArr.forEach((board) => (newState.boards[board.id] = board));
      return newState;
    }
    case CREATE_BOARD: {
      const newState = { ...state };
      newState.boards[action.board.id] = action.board;
      return newState;
    }
    default:
      return state;
  }
};

export default boardsReducer;
