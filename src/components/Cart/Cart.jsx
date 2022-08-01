import CartProduct from "../CartProduct/CartProduct";
import CartTotal from "../CartTotal/CartTotal";
import { CartSection } from "./Cart.style";

const Cart = ({ cartList, isLightMode, removeFromCart, cleanCart }) => {
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
          <>
            <ul className="cart__productsList">
              {cartList.map(({ product, quantity }, index) => (
                <CartProduct
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  quantity={quantity}
                  removeFromCart={removeFromCart}
                  isLightMode={isLightMode}
                />
              ))}
            </ul>
            <CartTotal
              cartList={cartList}
              cleanCart={cleanCart}
              isLightMode={isLightMode}
            />
          </>
        )}
      </div>
    </CartSection>
  );
};

export default Cart;
