import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductList/ProductList";
import "./styles/App.css";
import GlobalStyle from "./styles/global";

function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProductsList(res))
      .catch((err) => console.log(err));
  });
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <main className="main">
        <ProductsList list={productsList} />
      </main>
    </div>
  );
}

export default App;
