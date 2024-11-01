import React from "react";
const Navbar = () => {
    return (

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        <a className="nav-link text-muted" href="#">Features</a>
        <a className="nav-link text-muted" href="#">Pricing</a>
        <a className="nav-link disabled text-muted" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>



    )

}
export default Navbar