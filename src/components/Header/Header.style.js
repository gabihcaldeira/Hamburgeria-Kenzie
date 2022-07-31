import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) =>
    props.isLightMode ? "var(--grey-0)" : "var(--black)"};
  padding: 5px 0;
  margin: 0;

  img {
    content: ${(props) =>
      props.isLightMode
        ? 'url("./assets/logo-black.png")'
        : 'url("./assets/logo-white.png")'};
    height: 50%;
  }

  @media (min-width: 760px) {
    height: 80px;
    flex-direction: row;

    img {
      height: 100%;
    }
  }

  div {
    width: 440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ViewModeButton = styled.button`
  width: 34px;
  height: 34px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isLightMode ? "var(--white)" : "var(--grey)"};
  border: 2px solid
    ${(props) => (props.isLightMode ? "var(--grey-20)" : "var(--grey-50)")};
  color: ${(props) =>
    props.isLightMode ? "var(--grey-20)" : "var(--grey-50)"};
  font-size: 20px;

  :hover {
    background-color: ${(props) =>
      props.isLightMode ? "var(--grey-20)" : "var(--grey-50)"};
    color: ${(props) => (props.isLightMode ? "var(--white)" : "var(--grey)")};
    border: 2px solid
      ${(props) => (props.isLightMode ? "var(--white)" : "var(--grey)")};
  }
`;

export const Nav = styled.nav`
  width: 90%;
  max-width: 380px;
  height: 60px;
  background-color: ${(props) =>
    props.isLightMode ? "var(--white)" : "var(--grey)"};
  border: 2px solid
    ${(props) => (props.isLightMode ? "var(--grey-20)" : "var(--grey-100)")};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 50%;
    color: var(--grey-50);
  }

  input::placeholder {
    color: var(--grey-20);
  }

  button {
    background-color: ${(props) =>
      props.isLightMode ? "var(--color-primary)" : "var(--color-secondary)"};
    color: ${(props) => (props.isLightMode ? "var(--grey)" : "var(--grey-0)")};
  }

  button + button {
    margin-left: 5px;
  }

  button:hover {
    background-color: ${(props) =>
      props.isLightMode
        ? "var(--color-primary-50)"
        : "var(--color-secondary-50)"};
    color: ${(props) =>
      props.isLightMode ? "var(--grey-100)" : "var(--grey-20)"};
  }
`;
