import { Link } from "react-router-dom";
import "./Header.css"
import logo from '../../assets/Images/logo.png'
import NavItem , {NavItemDropDown} from "../../components/NavItem/NavItem";
const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark navbar-cyborg">
      <div className="container">
      <Link to="/" className="navbar-brand">
      <img src={logo} alt="" />
      </Link>
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
              <a href="" className="nav-link">
              Browse
              </a>
              </NavItem>
              <NavItemDropDown>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
               Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                  Streams
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">
                    Where to go next
                  </a>
                </li>
              </ul>
              </NavItemDropDown>
              <NavItem>
              <a href="#faq" className="nav-link">
              Streams
              </a>
              </NavItem>
              <NavItem>
              <Link to="/Profile" className="nav-link">Profile</Link>
            
              </NavItem>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
