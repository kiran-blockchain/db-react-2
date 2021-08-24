
import Categroy from "./components/categories"
import Header from "./components/header"
import Products from "./components/products"

const App = () => {
  return (
    <div>
      <Header/>
      <div class="row">
        <div class="col-md-3 offset-md-9">
          <Categroy/>
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default App;
