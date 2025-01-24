import { Link } from 'react-router-dom';

function Nav() {

    return (
        <>
        
        <nav>
            <Link className="nav-item" to="/">Home</Link>
            <a href="#about" className="nav-item">About</a>
            <a href="#menu" className="nav-item">Menu</a>
            <Link className="nav-item" to="/booking">Reservations</Link>
            <a href="#orderonline" className="nav-item">Order Online</a>
            <a href="#login" className="nav-item">Login</a>
        </nav>
        </>
    )
};

export default Nav;