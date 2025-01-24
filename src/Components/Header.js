import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <Link to="/"><img src=".\images\Logo.png" alt="logo"/></Link>
        <Nav/>
        </header>
    )
};

export default Header;