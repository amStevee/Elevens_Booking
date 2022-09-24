import styled from "styled-components";

const StyledHotel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;

  .hotelWrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  }

  .hotelTitle {
    font-size: 24px;
  }

  .hotelAddress {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hotelDistance {
    color: #3ac4e5;
    font-weight: 500;
  }

  .hotelPriceHighlight {
    color: #008009;
    font-weight: 500;
  }

  .hotelImages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .hotelImgWrapper {
    width: 33%;

    .hotelImg {
      width: 100%;
      object-fit: cover;
    }
  }

  .hotelDetails {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;

    .hotelDetailsTexts {
      flex: 3;

      .hotelDesc {
        font-size: 14px;
        margin-top: 20px;
      }
    }

    .hotelDetailsPrice {
      flex: 1;
      background-color: #ebf3ff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .hotelDetailsPrice > h1 {
      font-size: 1.2rem;
      color: #555;
    }

    .hotelDetailsPrice > span {
      font-size: 0.8rem;
    }

    .hotelDetailsPrice > h2 {
      font-weight: 300;
    }
  }
`;

export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 999;
  display: flex;
  align-items: center;

  .sliderWrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sliderImg {
    width: 80%;
    height: 80vh;
  }

  .close,
  .arrow {
    color: lightgray;
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
  }

  .arrow {
    margin: 20px;
    font-size: 50px;
  }
`;

export default StyledHotel;
