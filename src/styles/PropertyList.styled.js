import styled from "styled-components";

const StyledPropertyList = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  .pListItem {
    flex: 1;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }

  .pListImg {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .pListTitles > h1 {
    font-size: 18px;
    text-transform: capitalize;
  }

  .pListTitles > h2 {
    font-size: 14px;
    font-weight: 300;
  }
`;

export default StyledPropertyList;
