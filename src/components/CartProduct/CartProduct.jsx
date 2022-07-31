import numeral from "numeral";
import { CartItem } from "./CartProduct.style";

const CartProduct = ({ id, name, price, img }) => {
  return (
    <CartItem>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="itemInfo">
        <p>{name}</p>
        <span>R$ {numeral(price).format("00.00")}</span>
      </div>
      <button>Remover</button>
    </CartItem>
  );
};

export default CartProduct;
