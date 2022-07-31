import styled from "styled-components";

export const CartSection = styled.section`
  width: 90%;
  height: fit-content;
  background-color: ${(props) =>
    props.isLightMode ? "var(--grey-0)" : "var(--grey-100)"};
  border-radius: 8px;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 15px auto;

  @media (min-width: 760px) {
    width: 70%;
  }

  @media (min-width: 1020px) {
    max-width: 360px;
  }

  .cart__header {
    display: block;
    height: 65px;
    background-color: ${(props) =>
      props.isLightMode ? "var(--color-primary)" : "var(--color-secondary)"};
    border-radius: 8px 8px 0 0;
    color: ${(props) =>
      props.isLightMode ? "var(--grey-100)" : "var(--grey-0)"};
    text-align: left;
    padding: 22.5px 20px;
  }

  .cart__empty {
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.isLightMode ? "var(--black)" : "var(--grey-0)")};
  }

  .cart__link {
    font-size: 0.87rem;
    font-weight: 400;
    background: none;
    border: none;
    color: ${(props) =>
      props.isLightMode ? "var(--grey-50)" : "var(--grey-20)"};
    cursor: pointer;
    transition: text-decoration 0.5s ease-in;
  }

  .cart__link:hover {
    font-style: italic;
    text-decoration: underline;
  }
`;
