import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-green-800">
      <div className="navbar-start">
        <NavLink to="/" className="btn bg-inherit border-inherit text-white text-xl">eAgroCom</NavLink>
      </div>
      <div className="navbar-center flex">
        <ul className="menu menu-horizontal text-white font-bold space-x-2">
          <li>
            <NavLink to="/" className="hidden lg:flex">Home</NavLink>
          </li>
          <li>
              <NavLink className="" to="/farmers">Farmers</NavLink>
          </li>
          <li>
            <NavLink to="/consumers">Consumers</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/" className="btn btn-sm bg-inherit border-inherit text-white font-bold text-lg">News</NavLink>
      </div>
    </div>
  );
};

export default Header;
