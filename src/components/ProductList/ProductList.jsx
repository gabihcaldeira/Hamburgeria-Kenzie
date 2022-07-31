import Product from "../Product/Product";
import { List } from "./ProductList.style";

const ProductsList = ({ list, addToCart, isLightMode }) => {
  return (
    <List>
      {list.map(({ id, name, category, price, img }) => (
        <Product
          key={id}
          id={id}
          name={name}
          category={category}
          price={price}
          img={img}
          action={addToCart}
          isLightMode={isLightMode}
        />
      ))}
    </List>
  );
};

export default ProductsList;
