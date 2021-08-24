import { products } from "../../constants/products"
const Products = () => {
    let items = products.map((item, index) => {
        return <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-4">
            <div class="card" >
                <img src={item.image} class="card-img-top img-thumbnail imgcard" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">{item.price}</a>
                </div>
            </div>
        </div>
    })
    return (
        <div class="row mt-2">
            {items}
        </div>
    )
}
export default Products;