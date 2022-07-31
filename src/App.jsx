import { useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductList/ProductList";
import { AppDiv } from "./styles/App.js";
import GlobalStyle from "./styles/global";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [productsList, setProductsList] = useState([]);
  const [cartProductsList, setCartProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function addToCart(ProductId) {
    const getProduct = productsList.filter(({ id }) => id === ProductId);
    setCartProductsList((oldCartList) => [...oldCartList, getProduct]);
    console.log(getProduct);
  }

  function searchProduct(event) {
    // event.preventDefault();
    const input = event.target.previousElementSibling.value.toLowerCase();
    const result = productsList.filter(({ name, category, price }) => {
      if (
        name.toLowerCase().includes(input) ||
        category.toLowerCase().includes(input) ||
        price.toString().includes(input)
      ) {
        return true;
      } else {
        return false;
      }
    });
    event.target.previousElementSibling.value = "";
    setFilteredProducts(result);
  }

  function showAllProducts() {
    setFilteredProducts(productsList);
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProductsList(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredProducts(productsList);
  }, [productsList]);

  return (
    <AppDiv isLightMode={isLightMode}>
      <GlobalStyle />
      <Header
        searchProduct={searchProduct}
        showAllProducts={showAllProducts}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
      <main className="main">
        <ProductsList
          list={filteredProducts}
          addToCart={addToCart}
          isLightMode={isLightMode}
        />
        <Cart cartList={cartProductsList} isLightMode={isLightMode} />
      </main>
    </AppDiv>
  );
}

export default App;
