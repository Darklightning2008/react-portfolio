import './Navbar.css'
import { Link } from 'react-router-dom'
import "./Navbar.css"

import profileImage from "../assets/profile.png"

function Nav() {
    return (
        <nav className="navbar">
            <img
  src={profileImage}
  alt="Deepak"
  className="navbar-logo"
/>
            <ul className="nav-links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certificates">Certificates</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Nav
