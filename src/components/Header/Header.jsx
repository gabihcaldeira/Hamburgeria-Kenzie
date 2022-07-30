import { StyledHeader, Nav } from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <img alt="Burger Kenzie Logo" />
      <Nav>
        <input type="text" placeholder="Digitar Pesquisa" />
        <button>Pesquisar</button>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
