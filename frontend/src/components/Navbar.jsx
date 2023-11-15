import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-menu">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
