import { refreshPinThunk } from "./pin";

//TYPES
const CREATE_COMMENT = "POST /api/comments";
const GET_COMMENTS = "GET /api/comments";
const UPDATE_COMMENT = "PUT /api/comments/:commentsId";
const DELETE_COMMENT = "DELETE /api/comments/:commentsId";

//Action Creators
export function createComment(comment) {
  return {
    type: CREATE_COMMENT,
    comment,
  };
}

export function loadComments(comments) {
  return {
    type: GET_COMMENTS,
    comments,
  };
}

export function updateComment(comment, commentId) {
  return {
    type: UPDATE_COMMENT,
    comment,
    commentId,
  };
}

export function deleteComment(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId,
  };
}

//AC Thunks
export const thunkPostComment = (comment) => async (dispatch) => {
  const res = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });
};

export const thunkGetComments = () => async (dispatch) => {
  const res = await fetch("/api/comments");
  
  if (res.ok) {
    const comments = await res.json();
    dispatch(loadComments(comments));
  }
};

export const thunkUpdateComments = (comment, commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const resComment = await res.json();
    dispatch(refreshPinThunk(resComment.pin));
    return res;
  }
};

export const thunkDeleteComment = (commentId, pinId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const data = await res.json();
    dispatch(deleteComment(commentId));
    dispatch(refreshPinThunk(data.pin));
    return res;
  }
};

const initialState = {
  comments: {},
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT: {
      const newState = { ...state };
      newState.comments[action.comment.id] = action.comment;
      return newState;
    }
    case GET_COMMENTS: {
      const comments_array = action.comments.comments;
      let newState = { ...state };
      comments_array.forEach((comment) => (newState.comments[comment.id] = comment));
      return newState;
    }
    case UPDATE_COMMENT: {
      const newState = { ...state };
      newState.comments[action.commentId] = action.comment.comment;
      return newState;
    }
    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState.comments[action.commentId];
      return newState;
    }
    default:
      return state;
  }
};

export default commentsReducer;
