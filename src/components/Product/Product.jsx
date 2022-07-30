import { ListItem } from "./Product.style";
import numeral from "numeral";

const Product = ({ name, category, price, img }) => {
  return (
    <ListItem>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="itemInfo">
        <h3>{name}</h3>
        <span>{category}</span>
        <p>R$ {numeral(price).format("0.00")}</p>
      </div>
      <button>Adicionar</button>
    </ListItem>
  );
};

export default Product;
