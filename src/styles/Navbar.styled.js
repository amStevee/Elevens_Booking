import styled from "styled-components";

const StyledNav = styled.nav`
  height: 50px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: center;

  .navContainer {
    width: 100%;
    max-width: 1024px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: 500;
  }

  .navButton {
    margin-left: 20px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.color.background};
    background-color: #fafafa;
  }
`;

export default StyledNav;
