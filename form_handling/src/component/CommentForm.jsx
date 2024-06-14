import React, { useState } from 'react';

const FormPractice = ({ addNewComment }) => {
    const [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: ""
    });

    function handleInputChange(e) {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        addNewComment(formData);
        setFormData({
            username: "",
            comment: "",
            rating: ""
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='enter username'
                    name='username'
                    onChange={handleInputChange}
                    value={formData.username}
                />
                <input
                    placeholder='enter comment'
                    name='comment'
                    onChange={handleInputChange}
                    value={formData.comment}
                />
                <input
                    type='number'
                    placeholder='enter rating'
                    name='rating'
                    onChange={handleInputChange}
                    value={formData.rating}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormPractice;
