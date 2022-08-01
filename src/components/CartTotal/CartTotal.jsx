import { useEffect, useState } from "react";
import numeral from "numeral";
import { TotalDiv } from "./CartTotal.style";

const CartTotal = ({ cartList, cleanCart, isLightMode }) => {
  const [totalPurchase, setTotalPruchase] = useState(0);

  useEffect(() => {
    const total = cartList.reduce((total, { product, quantity }) => {
      return (total += product.price * quantity);
    }, 0);
    setTotalPruchase(total);
  }, [cartList]);

  return (
    <TotalDiv isLightMode={isLightMode}>
      <div>
        <p>Total</p>
        <span>R$ {numeral(totalPurchase).format("0.00")}</span>
      </div>
      <button onClick={cleanCart}>Limpar Carrinho</button>
    </TotalDiv>
  );
};

export default CartTotal;
