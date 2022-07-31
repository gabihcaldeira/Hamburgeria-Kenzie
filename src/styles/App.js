import styled from "styled-components";

export const AppDiv = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;

  main {
    background-image: ${(props) =>
      props.isLightMode
        ? 'url("./assets/background-white.jpg")'
        : 'url("./assets/background-black.jpg")'};
    background-repeat: repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: 760px) {
    .main {
      background-size: contain;
    }
  }

  @media (min-width: 1020px) {
    .main {
      height: 100vh;
      display: flex;
    }
  }
`;
