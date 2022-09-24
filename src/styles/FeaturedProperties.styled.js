import styled from "styled-components";

const StyledFeaturedP = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .fpItem {
    flex: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
  }

  .fpImg {
    width: 100%;
    object-fit: cover;
  }

  .fpName {
    font-weight: bold;
  }

  .fpCity {
    font-weight: 300;
  }

  .fpPrice {
    font-weight: 500;
  }

  .fpRating > span {
    font-size: 14px;
  }
`;

export default StyledFeaturedP;
