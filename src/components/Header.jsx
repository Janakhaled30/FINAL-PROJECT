import React from 'react';
import './heaastyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header() {
    const category = 'o'
  return (<header  class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand me-auto " href="#">Logo</a>
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
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle p-2 p-lg-3" href={`/display/${category}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Hidden Places
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/display">Hidden gems</Link>
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/display">Ancient ST.</Link>

                          </ul>
                      </li>
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle p-2 p-lg-3" href={`/display/${category}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Historical Places
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/display">Museums </Link>
                          <Link class="nav-link mx-lg-2 active" aria-current="page" to="/display">Biba Alex.</Link>
                          </ul>
                      </li>
                  </ul>
          </div>
      </div>
      <div class="search ps-3 pe-3">
          <i class="fa-solid fa-comment"></i>
      </div>
  </div><div class header-image>
      </div>
</header>
             )
}

export default Header;