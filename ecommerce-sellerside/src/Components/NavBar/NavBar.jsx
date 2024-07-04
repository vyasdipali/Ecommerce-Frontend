import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: "#405D72" }}>
      <div className="container">
        <a className="navbar-brand" href="#" style={{ color: "#FFF8F3" }}>Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ justifyContent: 'end' }}>
          <div className="navbar-nav" >
            <a className="nav-link active mx-3" aria-current="page" href="#" style={{ color: "#FFF8F3" }}>Home</a>
            <a className="nav-link mx-3" href="#" style={{ color: "#FFF8F3" }}>Features</a>
            <a className="nav-link mx-3" href="#" style={{ color: "#FFF8F3" }}>Pricing</a>
            <a className="nav-link mx-3" href="#"><i className="bi bi-search"></i></a>
            <Link className="nav-link mx-3" to='/signup'>
              <button className='Selling-btn'>Start Selling</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
