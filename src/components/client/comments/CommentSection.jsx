import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import useStyles from "./styles";
import { commentBook } from "../../../actions/book";
import { useParams } from "react-router-dom";

const CommentSection = ({ book }) => {
  // const book = useSelector((state)=>state.books.bookDetails);
  // console.log(book?.comments)
  // console.log(book?.comments);
  const { id } = useParams();
  // console.log(id);
  // const classes = useStyles();
  const [comments, setComments] = useState(book?.comments);
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
  const commentsRef = useRef();
  const handleClick = async () => {
    const finalComment = `${user} : ${comment}`;
    const newComment = await dispatch(commentBook(finalComment, book?._id));
    setComments(newComment);
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-100">
      {/* <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}> */}

      <Typography gutterBottom className="fw-bold fs-3">
        Comments
      </Typography>
      {comments.map((c, i) => (
        <Typography key={i} gutterBottom variant="subtitle1">
          {/* {c} */}
          <div class="row ms-4 mb-5">
            <div variant="h6" className="col-3 fw-bold">
              {c.split(":")[0]}
            </div>
            <div className="col-9">{c.split(":")[1]}</div>
          </div>
          <hr />
        </Typography>
      ))}
      <div ref={commentsRef} />
      {/* </div> */}
      {user && (
        <div className="row ms-4 mt-5">
          <div className="col-3"></div>
          <div className="col-9">
            <div>
              <Typography gutterBottom variant="h6">
                Write a Comment
              </Typography>
              <TextField
                fullWidth
                rows={4}
                variant="outlined"
                label="Comment"
                multiline
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <Button
                style={{ marginTop: "10px" }}
                fullWidth
                disabled={!comment}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Comment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default CommentSection;
