import numeral from "numeral";
import { CartItem } from "./CartProduct.style";

const CartProduct = ({
  id,
  name,
  price,
  img,
  quantity,
  removeFromCart,
  isLightMode,
}) => {
  return (
    <CartItem isLightMode={isLightMode}>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <div className="itemInfo">
          <h3>{name}</h3>
          <p>
            R$ {numeral(price).format("0.00")} <span>x{quantity}</span>
          </p>
        </div>
        <button onClick={() => removeFromCart(id)}>Remover</button>
      </div>
    </CartItem>
  );
};

export default CartProduct;
