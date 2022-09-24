import styled from "styled-components";

const HeaderSearch = styled.div`
  height: 30px;
  background-color: #fff;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -20px;
  width: 100%;
  max-width: 1024px;
  z-index: 2;

  .headerIcon {
    color: lightgray;
  }

  .headerSearchItem {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .headerSearchInput {
    border: none;
    outline: none;
  }

  .headerSearchText {
    color: lightgray;
    cursor: pointer;
  }

  .dateRange {
    position: absolute;
    top: 50px;
  }

  .options {
    position: absolute;
    top: 50px;
    background-color: #fafafa;
    box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
    color: gray;
    padding: 10px;
  }

  .optionItem {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .optionCount {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: #000;
  }
`;

export default HeaderSearch;
