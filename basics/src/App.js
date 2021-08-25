import { useState } from "react"

import Categroy from "./components/categories"
import Header from "./components/header"
import Products from "./components/products"
import Signup from "./components/signup"

const App = () => {
  const countriesList = [
    { name: "Select Country", value: '' },
    { name: "India", value: "IN" },
    { name: "United State", value: "USA" }];
    const [selectedCountry, setCountry]=useState('IN');   
    const countryChangedFromSignup = (data)=>{
      console.log(data);
      setCountry(data);
    }
  return (
   
    <div>
      <Header country={selectedCountry} />
      <Signup  countriesList={countriesList} changeCountry = {countryChangedFromSignup} />
    </div>
  );
}

export default App;
