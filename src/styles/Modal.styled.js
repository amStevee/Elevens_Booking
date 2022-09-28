import styled from "styled-components";

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;

  .rcontainer {
    position: relative;
  }

  .rClose {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .rItem {
    color: #000;
  }

  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  @keyframes scale-up-center {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
  @keyframes scale-up-ver-center {
    0% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
    }
  }
`;

export default StyledModal;
