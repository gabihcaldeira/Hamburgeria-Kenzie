import { CartSection } from "./Cart.style";

const Cart = ({ cartList }) => {
  return (
    <CartSection>
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
          <ul className="cart__productsList"></ul>
        )}
      </div>
    </CartSection>
  );
};

export default Cart;
