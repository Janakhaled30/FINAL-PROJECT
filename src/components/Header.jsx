import React from 'react';
import './heaastyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png'


function Header() {
    const category = 'o'
  return (<header  class="navbar navbar-expand-lg fixed-top">
      <header style={{ backgroundColor: 'white' }}>
  <img src="logo.png" alt="Logo" />
  <h1 style={{ marginLeft: '10px' }}>Alexplorer</h1>
</header>
      <div class="container-fluid">
          <img  className='logo' src={logo}/>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvas Navbar Label">
              <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvas NavbarLabel">Logo</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                      <li class="nav-item">
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/Home">Home</Link>
                      </li>
                      <li class="nav-item">
                      <Link class="nav-link mx-lg-2 active" aria-current="page" to="/Explore">Explore</Link>
                      </li>
                      <li class="nav-item">
                      <Link class="nav-link mx-lg-2 active" aria-current="page" to="/Family">Family</Link>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle p-2 p-lg-3" href={`/display/${category}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Others
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="../pages/HiddenPlaces">Hidden gems </Link>
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/pages/historical">Historical PL</Link>
                          </ul>
                      </li>
                  </ul>
          </div>
      </div>

      <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="search ps-3 pe-3">
          <i class="fa-solid fa-comment"></i>
      </div>
  </div><div class header-image>
      </div>
</header>
             )
}

export default Header;
