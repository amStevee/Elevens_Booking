import StyledNav from "../styles/Navbar.styled";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../contex/AuthContext";
import { useContext } from "react";

export default function Navbar() {
  const { user } = useContext(AuthContex);
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const login = () => {
    navigate("/login");
  };
  return (
    <StyledNav>
      <div className="navContainer">
        <Link to={"/"}>
          <span className="logo">Elevensbooking</span>
        </Link>
        {user ? (
          user.username
        ) : (
          <div className="navitems">
            <button className="navButton" onClick={register}>
              Register
            </button>
            <button className="navButton" onClick={login}>
              Login
            </button>
          </div>
        )}
      </div>
    </StyledNav>
  );
}
