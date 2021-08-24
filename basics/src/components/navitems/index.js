const NavItems = () => {
    const list = ["Home","Apparel", "Electronics","About us",  "Contact us", "Login"];
    //map method;
    const navs = list.map((item, index) => {
        console.log(item);
        console.log(index);

        return (
        <li class="nav-item" key={index}>
            <a class="nav-link" href="#">{item}</a>
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