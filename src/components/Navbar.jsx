import StyledNav from "../styles/Navbar.styled";
import { Link } from "react-router-dom";
import { AuthContex } from "../contex/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user } = useContext(AuthContex);
  return (
    <StyledNav>
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">logbooking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navitems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </StyledNav>
  );
}
