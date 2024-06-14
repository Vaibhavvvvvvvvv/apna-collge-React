import React, { useState } from 'react';
import FormPractice from './CommentForm';
const Comment = () => {
    let [comments, setComments] = useState([{
        username: "vaibhav",
        comment: "this is a comment",
        rating: 2
    }]);

    function addNewComment(newComment) {
        setComments((currentComments) => [...currentComments, newComment]);
        console.log("Comment added:", newComment);
    }

    return (
        <div>
            {
                comments.map((comment, idx) => (
                    <div key={idx}>
                        <span>{comment.comment}</span>
                        &nbsp;
                        <span>(rating={comment.rating})</span>
                        &nbsp;
                        <span>{comment.username}</span>
                    </div>
                ))
            }

            <FormPractice addNewComment={addNewComment} />
        </div>
    );
}
export default Comment;
