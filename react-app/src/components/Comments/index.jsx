import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { thunkDeleteComment, thunkUpdateComments } from "../../store/comment";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

export default function Comments({ comment }) {
  const user = useSelector((state) => state.session.user);
  const commentOwners = user;
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);
  const [newComment, setNewComment] = useState(comment.comment);
  const [displayComment, setDisplayComment] = useState(comment.comment);
  const [validationErrors, setValidationErrors] = useState({});

  const onDelete = () => {
    dispatch(thunkDeleteComment(comment.id));
  };

  const toggleUpdate = () => {
    setNewComment(comment.comment);
    setUpdate(true);
    if (update === true) {
      setUpdate(false);
      setValidationErrors({});
    }
  };

  const updateComment = () => {
    if (newComment.length === 0) {
      setValidationErrors({ comment: "Cannot submit empty comment" });
    } else {
      const updateComment = {
        user_id: user.id,
        pin_id: comment.pinId,
        comment: newComment,
      };
    //   setDisplayComment(comment.comment =)
    comment.comment = newComment
      dispatch(thunkUpdateComments(updateComment, comment.id));
      toggleUpdate();
    }
  };

  return (
    <>
      <div id={comment.id + "container"} className="comments-list-div">
        <img
          className="comments-list-pfp"
          src={commentOwners[comment.userId]?.profilePic}
          alt="avatar"
        />
        <div className="comments-list-username">
          <div className="comments-input-box-parent-div">
            <li id={"li" + comment.id} key={comment.id}>
              <p style={{ fontWeight: "bolder" }}>
                {commentOwners[comment.userId]?.username}
              </p>
              {!update && <p id={comment.id}>{comment.comment}</p>}
              {update && (
                <>
                  <textarea
                    id={"ta" + comment.id}
                    cols={"80"}
                    rows={"7"}
                    maxLength={"255"}
                    autoFocus={true}
                    class={"comment-input-area"}
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  {validationErrors.comment && (
                    <p>{validationErrors.comment}</p>
                  )}
                </>
              )}
              {!update && user && comment.userId === user.id && (
                <button
                  className="comments-list-owner-edit"
                  onClick={toggleUpdate}
                >
                  <FaPen />
                </button>
              )}
              {!update && user && comment.userId === user.id && (
                <button
                  className="comments-list-owner-delete"
                  onClick={onDelete}
                >
                  <FaRegTrashAlt />
                </button>
              )}
              {update && user && comment.userId === user.id && (
                <button
                  className="edit-comment-submit"
                  style={{ backgroundColor: "rgb(24, 51, 82)", border: "none" }}
                  onClick={updateComment}
                >
                  <i className="fa-solid fa-check" />
                </button>
              )}
              {update && user && comment.userId === user.id && (
                <button
                  className="edit-comment-cancel"
                  onClick={toggleUpdate}
                  style={{ backgroundColor: "rgb(24, 51, 82)", border: "none" }}
                >
                  <i className="fa-solid fa-x" />
                </button>
              )}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
