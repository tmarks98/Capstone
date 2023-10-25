// Types

const GET_BOARDS = "GET /api/boards";
const CREATE_BOARD = "POST /api/boards";
const EDIT_BOARD = "PUT /api/boards/:boardId";
const DELETE_BOARD = "DELETE /api/boards/:boardId";

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

export function editBoard(boardId, board) {
  return {
    type: EDIT_BOARD,
    boardId,
    board,
  };
}

export function deleteBoard(boardId) {
  return {
    type: DELETE_BOARD,
    boardId,
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
  // console.log("reeeee", res);
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

export const thunkEditBoards = (board, boardId) => async (dispatch) => {
  // console.log('board', board)
  const res = await fetch(`/api/boards/${boardId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(board),
  });
  // console.log("res", res);

  if (res.ok) {
    const data = await res.json();
    // console.log('res-good', data)
    dispatch(editBoard(data.board, boardId));
    return null;
  } else if (res.status < 500) {
    const data = await res.json();
    // console.log('res-bad', data)
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const thunkAddPin = (data) => async (dispatch) => {
  const res = await fetch(`/api/boards/add`, {
      method: 'PUT',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
}

export const thunkDeleteBoard = (boardId) => async (dispatch) => {
  const res = await fetch(`/api/boards/${boardId}`, {
    method: "DELETE",
  });
  dispatch(deleteBoard(boardId));
  return res;
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
    case EDIT_BOARD: {
      const newState = { ...state };
      newState.boards[action.boardId] = action.board;
      return newState;
    }
    case DELETE_BOARD: {
      const newState = {...state }
      delete newState.boards[action.boardId];
      return newState
    }
    default:
      return state;
  }
};

export default boardsReducer;
