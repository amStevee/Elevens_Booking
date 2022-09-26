import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../contex/AuthContext";
import StyledLogin from "../styles/Login.styled";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    passwords: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContex);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGGING_IN" });
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/login`, {
        username: credentials.username,
        passwords: credentials.passwords,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data });
    }
  };

  return (
    <StyledLogin>
      <div className="lcontainer">
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          id="passwords"
          placeholder="password"
          onChange={handleChange}
        />

        <button disabled={loading} onClick={handleClick}>
          Login
        </button>

        {error && <span>{error.message}</span>}
      </div>
    </StyledLogin>
  );
}