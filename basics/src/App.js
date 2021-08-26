import { useEffect, useState } from "react"
import { Switch, Route } from 'react-router-dom'
import Categroy from "./components/categories"
import Header from "./components/header"
import Home from "./components/home"
import Products from "./components/products"
import Signup from "./components/signup"
import { Provider, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk  from "redux-thunk"
import rootReducer from "./store";
import { getProducts } from "./store/products/action"
const store = createStore(rootReducer,applyMiddleware(thunk))
const App = () => {
  const countriesList = [
    { name: "Select Country", value: '' },
    { name: "India", value: "IN" },
    { name: "United State", value: "USA" }];
  const [selectedCountry, setCountry] = useState('IN');
  const countryChangedFromSignup = (data) => {
    console.log(data);
    setCountry(data);
  }
 
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="" component={Home} ></Route>
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
