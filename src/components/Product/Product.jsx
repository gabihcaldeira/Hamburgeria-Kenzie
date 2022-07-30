import { ListItem } from "./Product.style";

const Card = ({ name, category, price, img }) => {
  return (
    <ListItem>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div className="itemInfo">
        <h3>{name}</h3>
        <span>{category}</span>
        <p>{price}</p>
      </div>
      <button>Adicionar</button>
    </ListItem>
  );
};

export default Card;
