import styled from "styled-components";

export const TotalDiv = styled.div`
  width: 100%;
  border-top: 2px solid
    ${(props) => (props.isLightMode ? "var(--grey-20)" : "var(--grey)")};
  font-size: 0.87rem;
  font-weight: 600;
  color: ${(props) => (props.isLightMode ? "var(--grey)" : "var(--grey-20)")};
  padding: 20px 0;

  div {
    width: 95%;
    max-width: 340px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 20px;
  }

  div > span {
    color: var(--grey-50);
  }

  button {
    width: 95%;
    max-width: 340px;
    height: 60px;
    border-radius: 8px;
    background-color: ${(props) =>
      props.isLightMode ? "var(--grey-20)" : "var(--grey-100)"};
    color: ${(props) =>
      props.isLightMode ? "var(--grey-50)" : "var(--grey-50)"};
    border: 2px solid
      ${(props) => (props.isLightMode ? "var(--grey-20)" : "var(--grey-50)")};
  }

  button:hover {
    background-color: ${(props) =>
      props.isLightMode ? "var(--grey-50)" : "var(--grey-50)"};
    color: ${(props) =>
      props.isLightMode ? "var(--grey-20)" : "var(--grey-100)"};
  }
`;
