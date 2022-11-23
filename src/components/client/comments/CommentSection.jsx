import React , {useState , useRef} from 'react';
import { Typography ,TextField , Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from "./styles";
import { commentBook } from '../../../actions/book';
import { useParams } from "react-router-dom";


const CommentSection = () => {
    const book = useSelector((state)=>state.books.bookDetails);
    console.log(book?.comments)
    const { id } = useParams();
    console.log(id)
    const classes = useStyles()
    const [comments , setComments] = useState(book?.comments)
    const [comment , setComment] = useState("");
  const  user  = useSelector((state) => state.userState.user);
    const dispatch = useDispatch()
    const commentsRef = useRef();
    const handleClick = async() =>{
        const finalComment=`${user} : ${comment}`
        const newComment = await dispatch(commentBook(finalComment , book?._id))
        setComments(newComment)
        commentsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    
    
  return (
    <div>
        <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
                <Typography gutterBottom variant='h6'>Comments</Typography>
                {comments.map((c , i)=>(
                     <Typography key={i} gutterBottom variant='subtitle1'>
                         <strong>{c.split(': ')[0]}</strong>
                         {c.split(':')[1]}
                     </Typography>
                ))}
                <div ref={commentsRef} />
            </div>
            {user &&( <div style={{width:"70%"}}>
       <Typography gutterBottom variant='h6'>Write a Comment</Typography>
        <TextField
        fullWidth
        rows={4}
        variant="outlined"
        label="Comment"
        multiline
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        />
        <Button style={{marginTop:"10px"}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                    Comment
        </Button>
        </div> ) }
        
        </div>
        </div>
  )
}

export default CommentSection