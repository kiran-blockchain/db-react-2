import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from 'yup';

const Login = () => {
    const init = {
        email: '',
        username:''
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Enter Valid Email').required('Email is required')
        ,username:Yup.string().matches(/^[a-zA-Z0-9]*$/,"Username is alphanumeric only").required('Enter Username').min(4,"Username must be 4 characters").max(10,'Username cannot exceed 10 characters')
    });
    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={init}
                validationSchema={validationSchema}
                onSubmit={values=>{
                    console.log(values);
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <div class="container-fluid mt-3">
                            <div class="row offset-md-3">
                                <div class="card col-md-8">
                                    <div class= "row mb-3 mt-3">
                                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                                        <div class="col-sm-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={handleChange}
                                                name="email" />
                                                 <div className="text-danger"><ErrorMessage  name="email"/></div>
                                        </div>
                                      
                                    </div>
                                    <div class= "row mb-3 mt-3">
                                        <label for="username" class="col-sm-2 col-form-label">Username</label>
                                        <div class="col-sm-6">
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={handleChange}
                                                name="username" />
                                                 <div className="text-danger"><ErrorMessage  name="username"/></div>
                                        </div>
                                      
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-1 offset-md-4 mt-2 mb-2">
                                            <button type="submit" class="btn btn-primary">Login</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </form>
                )}
            </Formik>
        </div >
    )
}

export default Login;