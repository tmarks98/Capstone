// Types

const GET_BOARDS = "GET /api/boards";

// Actions
export function getBoards(boards) {
    return {
        type: GET_BOARDS,
        boards,
    }
}

// Thunks
export const thunkGetBoards = () => async (dispatch) => {
    const res = await fetch("/api/boards");
    if (res.ok) {
      const boards = await res.json();
      dispatch(getBoards(boards));
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
      default:
        return state;
    }
  };
  
  export default boardsReducer;