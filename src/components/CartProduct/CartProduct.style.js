import styled from "styled-components";

export const CartItem = styled.li`
  width: 95%;
  max-width: 340px;
  height: 80px;
  border-radius: 5px;
  font-size: 0.87rem;
  font-weight: 400;
  color: var(--grey-50);
  display: flex;
  justify-content: space-between;
  margin: 10px auto;

  figure,
  figure > img {
    height: 100%;
    background-color: ${(props) =>
      props.isLightMode ? "var(--grey-20)" : "var(--grey-50)"};
    border-radius: 5px;
  }

  div {
    width: 74%;
    display: flex;
    justify-content: space-between;
  }

  .itemInfo {
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
  }

  .itemInfo > h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => (props.isLightMode ? "var(--grey)" : "var(--grey-0)")};
  }

  .itemInfo > h3,
  .itemInfo > p {
    padding: 5px;
    text-align: left;
    white-space: nowrap;
    width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    font-weight: 500;
    color: var(--grey-50);
    height: fit-content;
    padding: 7px;
    font-size: 0.87rem;
  }
`;
