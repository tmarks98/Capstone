// Types
const GET_PINS = "GET /api/pins";
const CREATE_PIN = "POST /api/pins";

// Actions
export function getPins(pins) {
  return {
    type: GET_PINS,
    pins,
  };
}
export function createPin(pin) {
  return {
    type: CREATE_PIN,
    pin,
  };
}

// Thunks
export const loadPinsThunk = (pins) => async (dispatch) => {
  dispatch(getPins(pins));
};

export const thunkGetPins = () => async (dispatch) => {
  const res = await fetch("/api/pins");
  if (res.ok) {
    const pins = await res.json();
    dispatch(getPins(pins));
  }
};

export const thunkPostPins = (pin) => async (dispatch) => {
  const res = await fetch("/api/pins/new", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pin),
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(createPin(data));
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
  pins: {},
};

const pinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PINS: {
      const pinsArr = action.pins.pins;
      let newState = { ...state };
      pinsArr.forEach((pin) => (newState.pins[pin.id] = pin));
      return newState;
    }
    case CREATE_PIN: {
      const newState = { ...state };
      newState.pins[action.pin.id] = action.pin;
      return newState;
    }
    default:
      return state;
  }
};

export default pinsReducer;
