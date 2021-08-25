import NavItems from "../navitems";
const Header =(props)=>{
    let headerName ="DBS";
return (
    <div className="container-fluid">
         <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{headerName}</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <NavItems/>
            <a class="navbar-brand" href="#">{props.country?props.country:''}</a>
        </div>
      </nav>
    </div>
   
   )
}
export default Header