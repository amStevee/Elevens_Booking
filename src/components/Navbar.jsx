import StyledNav from "../styles/Navbar.styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <StyledNav>
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">logbooking</span>
        </Link>
        <div className="navitems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </StyledNav>
  );
}
