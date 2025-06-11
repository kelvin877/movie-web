import { Link } from "react-router-dom";
import "../css/Navbar.css";

function NavBar(){
    return <nav className="navbar">
                <div className="navbar-brand">
                    <Link to="/movie-web" style={{ color: "white" }} >Movie App</Link>
                </div>
                <div className="navbar-links">  
                    <Link to="/movie-web" className="nav-link">Home</Link>
                    <Link to="/movie-web/favorites" className="nav-link">Favorites</Link>
                </div>
            </nav>
}



export default NavBar;