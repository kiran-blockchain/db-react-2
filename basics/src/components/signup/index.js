import { useEffect, useState } from "react";
import axios from 'axios';
const Signup = () => {
    // const countriesList = [
    //     { name: "Select Country", value: '' },
    //     { name: "India", value: "IN" },
    //     { name: "United State", value: "USA" }];
    const [countries, setCountryList] = useState([]);
    const [register, setRegister] = useState({ email: 'Kiran@gmail.com', userName: "kiran" });
    //if you want to perform async call at the time of loading the ocmpoentn
    //useEffect
    useEffect(async() => {
        let response = await axios.get("https://restcountries.eu/rest/v2/all");
         let countriesList = response.data.map(x=>{
             return {name:x.name,value:x.alpha2Code};
         })
         setCountryList(countriesList);
    }, []);

    const handleInputChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    };

    const countryOptions = countries.map((item, index) => {
        return <option value={item.value}>{item.name}</option>
    });
    return (
        <div class="container-fluid mt-3">
            <div class="row offset-md-3">
                <div class="card col-md-8">
                    <div class="row mb-3 mt-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-6">
                            <input type="text"
                                class="form-control"
                                id="email"
                                name="email"
                                value={register.email}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label for="userName" class="col-sm-2 col-form-label">Username</label>
                        <div class="col-sm-6">
                            <input type="text"
                                class="form-control"
                                id="userName"
                                name="userName"
                                value={register.userName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label for="userName" class="col-sm-2 col-form-label">First Name</label>
                        <div class="col-sm-6">
                            <input type="text"
                                class="form-control"
                                id="firstName"
                                name="firstName"
                                value={register.firstName}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label for="userName" class="col-sm-2 col-form-label">Country</label>
                        <div class="col-sm-6">
                            <select class="form-control" name="country"
                                onChange={handleInputChange}>
                                    <option value="">Select Country</option>
                                {countryOptions}
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3 mt-3">
                        <label for="gender" class="col-sm-2 col-form-label">Gender</label>
                        <div class="col-sm-6">
                            <input type="radio"
                                // class="form-control"
                                id="genderM"
                                name="gender"
                                value="M"
                                checked={register.gender == 'M'}
                                onChange={handleInputChange}
                            /> Male
                            <input type="radio"
                                // class="form-control"
                                id="genderF"
                                name="gender"
                                value="F"
                                checked={register.gender == 'F'}
                                onChange={handleInputChange}
                            />Female
                        </div>
                    </div>

                    <div class="row mb-3 mt-3">
                        <div class="col-md-1 offset-md-3">
                            <button class="btn btn-submit btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
            <pre>
               
            </pre>
        </div>
    )
}
export default Signup;