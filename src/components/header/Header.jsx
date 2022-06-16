import React from 'react'
import Branding from './Branding';
import Menu from './Menu';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Branding />
          <Menu />
        </div>
      </nav>
    </div>
  )
}

export default Header