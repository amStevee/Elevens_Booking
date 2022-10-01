import StyledRegister from "../styles/Register.styled";
import Input from "../components/reuseables/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [Values, setValues] = useState([]);
  const navigate = useNavigate();

  //   const usernameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const fdata = Object.fromEntries(data.entries());
    setValues(fdata);
    const res = await axios.post(
      `https://boiling-wave-77839.herokuapp.com/api/auth/register`,
      Values
    );
    if (res.data) {
      navigate("/login");
    } else {
      console.log("something went wrong");
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      erroMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      erroMessage: "It should be a vaid emai address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      erroMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      erroMessage: "Password dont match!",
      label: "Confirm Password",
      pattern: Values.passwords,
      required: true,
    },
  ];
  return (
    <StyledRegister>
      <form onSubmit={handleSubmit}>
        <h1>
          <Link to={"/login"}>Login</Link>
        </h1>
        {inputs.map((inp) => {
          return (
            <div className="fbody" key={inp.id}>
              <label htmlFor={inp.label}>{inp.label}</label>
              <Input
                key={inp.id}
                name={inp.name}
                type={inp.type}
                placeholder={inp.placeholder}
                id={inp}
                required={inp.required}
                pattern={inp.pattern}
              />
              <span>{inp.erroMessage}</span>
            </div>
          );
        })}

        <button>Submit</button>
      </form>
    </StyledRegister>
  );
}
