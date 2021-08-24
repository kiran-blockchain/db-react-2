import { products } from "../../constants/products";

const Categroy = () => {
    let categories = ["vegetables","fruits","nuts"]
    let categoryList = categories.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <select className="form-control mt-3">
            {categoryList}
        </select>
    )
}

export default Categroy;