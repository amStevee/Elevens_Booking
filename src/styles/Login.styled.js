import styled from "styled-components";

const StyledLogin = styled.div`
  background-color: purple;
  height: 100vh;
  .lcontainer {
    background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    );
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 6px;
    width: 300px;

    color: #fff;
    border-radius: 5px;

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: auto;
      height: 300px;
      padding: 6px;
      width: 250px;

      label {
        align-self: flex-start;
      }

      input:invalid[focused="true"] {
        border: 2px solid red;
      }

      span {
        font-size: 12px;
        color: yellow;
        display: none;
      }

      input:invalid[focused="true"] ~ span {
        display: block;
      }
    }
  }

  button {
    outline: none;
    border: none;
    color: #fff;
    padding: 10px 20px;
    margin: 10px;
    font-weight: 700;
    font-size: 1rem;
    background-color: rgb(69, 12, 154);
    cursor: pointer;
  }

  button:active {
    transform: scale(0.98);
  }

  input {
    padding: 15px;
    width: 100%;
    max-width: 250px;
    margin: 5px 0px;
    border-radius: 6px;
    border: none;
  }
`;

export default StyledLogin;
