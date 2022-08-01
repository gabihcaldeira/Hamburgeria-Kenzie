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
    const productIndex = cartProductsList.findIndex(
      ({ product }) => product.id === ProductId
    );
    if (productIndex !== -1) {
      cartProductsList[productIndex].quantity++;
      setCartProductsList([...cartProductsList]);
    } else {
      const getProduct = productsList.find(({ id }) => id === ProductId);
      const newProduct = {
        product: getProduct,
        quantity: 1,
      };
      setCartProductsList([...cartProductsList, newProduct]);
    }
  }

  function removeFromCart(ProductId) {
    const productIndex = cartProductsList.findIndex(
      ({ product }) => product.id === ProductId
    );
    if (cartProductsList[productIndex].quantity > 1) {
      cartProductsList[productIndex].quantity--;
      setCartProductsList([...cartProductsList]);
    } else {
      const removeProduct = cartProductsList.filter(
        ({ product }) => product.id !== ProductId
      );
      setCartProductsList([...removeProduct]);
    }
  }

  function cleanCart() {
    setCartProductsList([]);
  }

  function searchProduct(event) {
    let input = "";
    if (event.type === "keydown") {
      if (event.key === "Enter") {
        input = event.target.value.toLowerCase();
        event.target.value = "";
      } else {
        return null;
      }
    } else if (event.type === "click") {
      input = event.target.previousElementSibling.value.toLowerCase();
      event.target.previousElementSibling.value = "";
    }
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
        <Cart
          cartList={cartProductsList}
          isLightMode={isLightMode}
          removeFromCart={removeFromCart}
          cleanCart={cleanCart}
        />
      </main>
    </AppDiv>
  );
}

export default App;
