import styled from "styled-components";

export const StyledFeatured = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;
`;

export const FeaturedItem = styled.div`
  position: relative;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
`;

export const FeaturedImg = styled.img`
  width: 100%;
  max-width: 1024px;
  object-fit: cover;
`;

export const FeaturedTitles = styled.div`
  position: absolute;
  left: 10px;
  bottom: 30px;
`;
