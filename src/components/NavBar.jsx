
import { Link } from 'react-router-dom';


function NavBar() {


  return (
    <div className="side-menu">
      <ul>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        <li>
        <Link to="/gameform" className="form-link">Add a New Game</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar