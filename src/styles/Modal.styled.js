import styled from "styled-components";

const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 13px;

  .rcontainer {
    position: relative;
    background-color: #8ec5fc;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    padding: 20px;
  }

  .rClose {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .rItem {
    color: #000;
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 20px;
  }

  .rInfo {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .rTitle,
  .rPrice {
    font-weight: 500;
  }

  .rDesc {
    font-weight: 300;
  }

  .rMax {
    font-size: 12px;
  }

  .room {
    display: flex;
    flex-direction: column;
  }

  .selectRooms {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 13px;
    color: gray;
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
