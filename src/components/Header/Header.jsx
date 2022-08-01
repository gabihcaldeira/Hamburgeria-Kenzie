import { StyledHeader, Nav, ViewModeButton } from "./Header.style";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const Header = ({
  searchProduct,
  showAllProducts,
  isLightMode,
  setIsLightMode,
}) => {
  return (
    <StyledHeader isLightMode={isLightMode}>
      <div>
        <ViewModeButton
          isLightMode={isLightMode}
          onClick={() =>
            isLightMode ? setIsLightMode(false) : setIsLightMode(true)
          }
        >
          {isLightMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </ViewModeButton>
        <img alt="Burger Kenzie Logo" />
      </div>
      <Nav isLightMode={isLightMode}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onKeyDown={searchProduct}
        />
        <button onClick={searchProduct}>Pesquisar</button>
        <button onClick={showAllProducts}>Todos</button>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
