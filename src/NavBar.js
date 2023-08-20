import "./NavBar.css"
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <nav id="nav">
            <Link to="/" className="item">Home</Link>
            <Link to="chips" className="item">Chips</Link>
            <Link to="candy" className="item">Candy</Link>
            <Link to="soda" className="item">Soda</Link>
            <Link to="tab" className="item">For Tabitha</Link>
        </nav>
    );
}