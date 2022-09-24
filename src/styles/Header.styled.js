import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  display: flex;
  justify-content: center;
  position: relative;

  .headerList {
    display: flex;
    gap: 40px;
    margin-bottom: 50px;
  }

  .headerListItem {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .headerContainer {
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
  }

  .headerContainer.listmode {
    margin: 20px 0px 0px 0px;
  }

  .headerListItem.active {
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 20px;
  }

  .headerDescription {
    margin: 20px 0px;
  }
`;

export default StyledHeader;
