import React, { useState } from 'react';
import { useFormik } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Please add Review';
    }else if(values.username){
        errors.username = 'Looks good';
    }
    if (!values.comment) {
        errors.comment = 'Required';
    }
    if (!values.rating) {
        errors.rating = 'Required';
    }
    return errors;
};

const FormPractice = ({ addNewComment }) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            comment: '',
            rating: ''
        },
        validate,
        onSubmit: values => {
            addNewComment(values);
            setSubmittedData(values);
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="container mt-4">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Movie Name</label>
                    <input
                        type="text"
                        className={`form-control ${formik.errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                    {formik.errors.username ? <div className="invalid-feedback">{formik.errors.username}</div> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Enter Review</label>
                    <input
                        type="text"
                        className={`form-control ${formik.errors.comment ? 'is-invalid' : ''}`}
                        id="comment"
                        name="comment"
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                    />
                    {formik.errors.comment ? <div className="invalid-feedback">{formik.errors.comment}</div> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        className={`form-control ${formik.errors.rating ? 'is-invalid' : ''}`}
                        id="rating"
                        name="rating"
                        onChange={formik.handleChange}
                        value={formik.values.rating}
                    />
                    {formik.errors.rating ? <div className="invalid-feedback">{formik.errors.rating}</div> : null}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default FormPractice;
