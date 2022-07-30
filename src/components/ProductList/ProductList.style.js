import styled from "styled-components";

export const List = styled.ul`
  width: fit-content;
  height: 360px;
  overflow-x: scroll;
  display: flex;
  align-items: center;

  @media (min-width: 1020px) {
    overflow: hidden;
  }
`;
