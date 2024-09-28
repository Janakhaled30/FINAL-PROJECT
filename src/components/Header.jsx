import React from 'react';
import './heaastyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png'


function Header() {
    const category = 'o'
  return (<header  className="navbar navbar-expand-lg">
      <div className="container-fluid">
          <img  className='logo' src={logo}/>
          <span className='websiteName'>Alexplorer</span>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvas Navbar Label">
              <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvas NavbarLabel">Les Argonautes</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 navv" style={{ gap: "20px" }}>
                      <li className="nav-item">
                          <Link className="nav-link mx-lg-2" aria-current="page" to="/Home">Home</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link mx-lg-2" aria-current="page" to="/Explore">Explore</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link mx-lg-2" aria-current="page" to="/Family">Family</Link>
                      </li>
                      <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle p-2 p-lg-3" href={`/display/${category}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Others
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link className="nav-link mx-lg-2 active" aria-current="page" to="../pages/HiddenPlaces">Hidden gems </Link>
                          <Link className="nav-link mx-lg-2 active" aria-current="page" to="/pages/historical">Historical PL</Link>
                          <Link className="nav-link mx-lg-2 active" aria-current="page" to="/pages/Cafe">Cafes</Link>
                          </ul>
                      </li>
                  </ul>
          </div>
      </div>

      <button className="navbar-toggler pe-0  ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="search ps-3 pe-3">
          <i className="fa-solid fa-comment"></i>
      </div>
      </div>
</header>
             )
}

export default Header;
