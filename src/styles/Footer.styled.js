import styled from "styled-components";

const StyleFooter = styled.div`
  width: 100%;
  max-width: 1024px;
  font-size: 12px;
  display: flex;
  flex-direction: column;

  .fLists {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .fList {
    list-style-type: none;
    padding: 0;
  }

  .fListItem {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.background};
    cursor: pointer;
  }

  .fText {
    align-self: center;
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

export default StyleFooter;
