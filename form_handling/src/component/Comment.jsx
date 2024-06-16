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
        <div className="container mt-4">
        {
            comments.map((comment, idx) => (
                <div key={idx} className="card mb-3">
                    <div className="card-body">
                        <p className="card-text">{comment.comment}</p>
                        <p className="card-text"><strong>Rating:</strong> {comment.rating}</p>
                        <p className="card-text"><strong>Username:</strong> {comment.username}</p>
                    </div>
                </div>
            ))
        }

        <FormPractice addNewComment={addNewComment} />
    </div>
    );
}
export default Comment;
