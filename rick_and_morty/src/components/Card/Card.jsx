import { Link } from "react-router-dom";
import styleCard from "../Card/Card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions";

export default function Card(characters) {
  const dispatch = useDispatch();

  const handleAddToCart = (character) => {
    dispatch(addToCart(character));
  };

  return (
    <>
      <button onClick={() => handleAddToCart(characters)}>
        Agregar al carrito
      </button>

      <Link to={`/Detail/${characters.id}`} className={styleCard.container}>
        <img src={characters.image} alt={characters.name} />
        <h1>Name: {characters.name}</h1>
      </Link>
    </>
  );
}
