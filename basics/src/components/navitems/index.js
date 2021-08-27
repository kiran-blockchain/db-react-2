import { Link } from 'react-router-dom'
const NavItems = () => {
    const list = [
        { name: "Home", link: "" },
        { name: "Products", link: "/products" },
        { name: "Signup", link: "/signup" },
        { name: "Login", link: "/login" }];
    //map method;
    const navs = list.map((item, index) => {
        console.log(item);
        console.log(index);

        return (
            <li class="nav-item" key={item.index}>
                {/* <a class="nav-link" href="#">{item.name}</a> */}
                <Link className="nav-link" to={item.link}>{item.name}</Link>
            </li>
        )
    });
    return (
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {navs}
            </ul>
        </div>
    )
};
export default NavItems;