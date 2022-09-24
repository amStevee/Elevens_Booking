import styled from "styled-components";

const StyledMailList = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;

  .mailInputContainer > input {
    width: 350px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
  }
`;

export default StyledMailList;
