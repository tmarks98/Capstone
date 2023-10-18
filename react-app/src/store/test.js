const CHECK_PIN_IN_BOARD = "CHECK_PIN_IN_BOARD";

export function checkPinInBoard(data) {
  return {
    type: CHECK_PIN_IN_BOARD,
    data,
  };
}

export const thunkCheckPinInBoard = (boardId, pinId) => async (dispatch) => {
    const response = await fetch(`/api/tests/check-pin-in-board?board_id=${boardId}&pin_id=${pinId}`);
    
    if (response.ok) {
      const data = await response.json();
      dispatch(checkPinInBoard(data));
      return data;
    } else {
      const data = await response.json();
      return data;  // You can handle errors here, if needed
    }
  };

  const initialState = {
    pinInBoardCheck: null,
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case CHECK_PIN_IN_BOARD:
        return { ...state, pinInBoardCheck: action.data.message };
      default:
        return state;
    }
  }