import { useDispatch, useSelector } from "react-redux"
import { products } from "../../constants/products"
import { addToCart, removeFromCart } from "../../store/products/action";
const Products = () => {
    const shop = useSelector(x => {
        return x.CartFeatures;
    })
    console.log(shop);
    const dispatch = useDispatch();
   
    const items = shop.cartItems.map((item, index) => {
        return <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4">
            <div class="card" >
                <img src={item.image} class="card-img-top img-thumbnail imgcard" alt="..." />
                <div class="card-body">
                    <div class="col-md-12">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-warning mb-3" >Price : Rs.{item.price}</a>
                   </div>
                    <div class="row">
                        <div class="col-md-1">
                            <button class="btn btn-primary"
                            onClick={e=>{
                                dispatch(removeFromCart(item))
                            }}
                            >-</button>
                        </div>
                        <div class="col-md-1 text-center mt-2 ">
                            <label>{item.quantity}</label>
                        </div>
                        <div class="col-md-1">
                            <button class="btn btn-primary" onClick={e=>{
                                dispatch(addToCart(item))
                            }}>+</button>
                        </div>
                        <div class="col-md-1">
                            &nbsp;<button class="btn btn-danger" >Rs.{item.quantity*item.price}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    })
    return (
        <div class="row mt-2">
            <div class="col-md-2 offset-md-9">Total : {shop.cartTotal}</div>
            {items}
        </div>
    )
}
export default Products;