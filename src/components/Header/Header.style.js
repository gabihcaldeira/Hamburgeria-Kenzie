import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: var(--grey-0);
  padding: 5px 0;
  margin: 0;

  img {
    content: url("./assets/logo-black.png");
    height: 50%;
  }

  @media (min-width: 760px) {
    height: 80px;
    flex-direction: row;

    img {
      height: 100%;
    }
  }
`;

export const Nav = styled.nav`
  width: 90%;
  max-width: 380px;
  height: 60px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 50%;
    color: var(--grey-20);
  }

  input::placeholder {
    color: var(--grey-20);
  }
`;
