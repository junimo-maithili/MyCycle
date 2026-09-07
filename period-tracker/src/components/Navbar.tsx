import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink to="/">MyCycle</NavLink>
      </div>

      <div className="navbar-right">
      <NavLink to="/">Home</NavLink>
        <NavLink to="/log-period">Log</NavLink>
        <NavLink to="/view-records">View Records</NavLink>
      </div>
    </nav>

  );
};

export default Navbar;