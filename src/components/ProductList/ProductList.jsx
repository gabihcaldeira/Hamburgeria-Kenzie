import Product from "../Product/Product";
import { List } from "./ProductList.style";

const ProductsList = ({ list }) => {
  return (
    <List>
      {list.map(({ id, name, category, price, img }) => (
        <Product
          key={id}
          name={name}
          category={category}
          price={price}
          img={img}
        />
      ))}
    </List>
  );
};

export default ProductsList;
