import { Link } from "react-scroll";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
            NeuronWise
        </div>

        <ul>
          <li><Link to="home" smooth={true} activeClass="active">Home</Link></li>
          <li><Link to="about" smooth={true} activeClass="active">About</Link></li>
          <li><Link to="products" smooth={true} activeClass="active">Products</Link></li>
          <li><Link to="applications" smooth={true}  activeClass="active">Applications</Link></li>
          <li><Link to="careers" smooth={true} activeClass="active">Careers</Link></li>
          <li><Link to="contact" smooth={true} activeClass="active">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
