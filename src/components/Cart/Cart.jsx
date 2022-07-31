import CartProduct from "../CartProduct/CartProduct";
import { CartSection } from "./Cart.style";

const Cart = ({ cartList, isLightMode }) => {
  return (
    <CartSection isLightMode={isLightMode}>
      <div className="cart__header">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="cart__content">
        {cartList.length === 0 ? (
          <div className="cart__empty">
            <h4>Sua sacola está vazia</h4>
            <button className="cart__link">Adicionar itens</button>
          </div>
        ) : (
          <ul className="cart__productsList">
            {cartList.map(({ id, name, price, img }, index) => (
              <CartProduct
                key={index}
                id={id}
                name={name}
                price={price}
                img={img}
              />
            ))}
          </ul>
        )}
      </div>
    </CartSection>
  );
};

export default Cart;
