import styled from "styled-components";

export const ListItem = styled.li`
  width: 250px;
  height: 340px;
  background-color: var(--white);
  border: 2px solid var(--grey-20);
  border-radius: 8px;
  margin: 0 10px;
  padding-bottom: 20px;
  font-size: 0.87rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;

  figure {
    width: 100%;
    height: 150px;
    background-color: var(--grey-0);
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
    color: var(--grey-100);
  }

  span {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-50);
  }

  p {
    color: var(--color-primary);
  }

  button {
    width: fit-content;
    margin: 0 20px;
  }
`;
