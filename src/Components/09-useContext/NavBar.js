import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <NavLink activeClassName='active' className='navbar-brand' exact to='/'>
          useContext
        </NavLink>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink
              activeClassName='active'
              className='nav-link '
              aria-current='page'
              exact
              to='/'>
              Home
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-link'
              exact
              to='/about'>
              About
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-link'
              exact
              to='/login'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
