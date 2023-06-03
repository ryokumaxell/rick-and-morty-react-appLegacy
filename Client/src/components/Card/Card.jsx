import { Link } from "react-router-dom";
import styleCard from "../Card/Card.module.css";
import { useDispatch } from "react-redux";
import { addToFav } from "../../redux/Actions";

export default function Card(props) {
  const {  name, image } = props;
  const dispatch = useDispatch();
  

  const handleAddToFav = (props) => {
    dispatch(addToFav(props));
  };

  return (
    <>
      <button onClick={() => handleAddToFav(props)}>Agregar a favorito</button>

      <Link to={`/Detail/${name}`} className={styleCard.container}>
        <img src={image} alt={name} />
        <h1>Name: {name}</h1>
      </Link>
    </>
  );
}
