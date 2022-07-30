import styled from "styled-components";

export const List = styled.ul`
  height: 360px;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: auto;

  @media (min-width: 1020px) {
    width: 60%;
    overflow: hidden;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
  }

  @media (min-width: 1400px) {
    justify-content: flex-end;
  }
`;
