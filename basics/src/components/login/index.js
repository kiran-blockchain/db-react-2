import { useState } from "react";

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "",isValidEmail:true });
    const handleChange = (e) => {
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        validate(e);
    };
    const validate = (e) => {
        if (loginDetails.email && loginDetails.email != '') {
            loginDetails.isValidEmail = true;
            loginDetails.emailErrorMessage = '';
        }
        else {
            loginDetails.isValidEmail = false;
            loginDetails.emailErrorMessage = 'Enter Valid Email';
            loginDetails.isValidForm = false;
        }
        if(!loginDetails.isValidForm){
            e.preventDefault();
        }
        setLoginDetails({ ...loginDetails })
    }
    return (
        <div>
            <h1>Login</h1>
            <form>
                <div class="container-fluid mt-3">
                    <div class="row offset-md-3">
                        <div class="card col-md-8">
                            <div class={loginDetails.isValidEmail?"row mb-3 mt-3":"row mb-3 mt-3 has-danger"}>
                                <label for="email" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-6">
                                    <input type="text"
                                       class= {loginDetails.isValidEmail?"form-control":"form-control is-invalid"}
                                        id="email"
                                        name="email"
                                        onChange={handleChange}

                                    />
                                    <div class="text-danger">{loginDetails.emailErrorMessage}</div>
                                </div>


                            </div>
                            <div class="row ">
                            <div class="col-md-1 offset-md-4 mt-2 mb-2">
                                <button type="button" class="btn btn-primary " onClick={handleSubmit}>Login</button>
                            </div>
                        </div>
                        </div>
                       
                    </div>

                </div>
            </form>
        </div >
    )
}

export default Login;