import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  .listWrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
  }

  .listSearch {
    flex: 1;
    background-color: ${({ theme }) => theme.color.button};
    font-style: 20px;
    padding: 10px;
    border-radius: 10px;
    position: sticky;
    top: 10px;
    height: max-content;
    color: #fafafa;

    .lsTitle {
      color: #555;
      margin-bottom: 10px;
    }

    .lsOption {
      padding: 10px;
    }

    .lsItem {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 10px;

      & > label {
        font-size: 12px;
      }

      & > input {
        height: 30px;
        border: none;
        padding: 5px;

        ::placeholder {
          padding-left: 5px;
        }
      }

      & > span {
        background-color: #fff;
        height: 30px;
        padding: 5px;
        display: flex;
        align-items: center;
        color: #555;
        cursor: pointer;
      }
    }
  }

  .lsOptionItem {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #fafafa;
    font-size: 12px;

    .lsOptionInput {
      width: 50px;
    }
  }

  .listResult {
    flex: 3;
  }

  .disableDate {
    cursor: not-allowed;
  }
`;

export default StyledList;
