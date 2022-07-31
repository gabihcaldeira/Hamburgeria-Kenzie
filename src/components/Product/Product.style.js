import styled from "styled-components";

export const ListItem = styled.li`
  width: 250px;
  height: 340px;
  background-color: ${(props) =>
    props.isLightMode ? "var(--white)" : "var(--grey)"};
  border: 2px solid
    ${(props) => (props.isLightMode ? "var(--grey-20)" : "var(--grey-100)")};
  border-radius: 8px;
  margin: 10px;
  padding-bottom: 20px;
  font-size: 0.87rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  figure {
    width: 100%;
    height: 150px;
    background-color: ${(props) =>
      props.isLightMode ? "var(--grey-0)" : "var(--grey-50)"};
  }

  figure > img {
    height: 100%;
  }

  .itemInfo {
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
  }

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${(props) =>
      props.isLightMode ? "var(--grey-100)" : "var(--grey-0)"};
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) =>
      props.isLightMode ? "var(--grey-50)" : "var(--grey-20)"};
  }

  p {
    color: ${(props) =>
      props.isLightMode ? "var(--color-secondary)" : "var(--color-primary)"};
  }

  button {
    background-color: ${(props) =>
      props.isLightMode ? "var(--color-primary)" : "var(--color-secondary)"};
    color: ${(props) =>
      props.isLightMode ? "var(--grey-100)" : "var(--grey-0)"};
    width: fit-content;
    margin: 0 20px;
  }

  button:hover {
    background-color: ${(props) =>
      props.isLightMode
        ? "var(--color-primary-50)"
        : "var(--color-secondary-50)"};
    color: ${(props) =>
      props.isLightMode ? "var(--grey-50)" : "var(--grey-20)"};
  }
`;
