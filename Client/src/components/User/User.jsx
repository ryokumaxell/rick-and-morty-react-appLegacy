import { useSelector, useDispatch } from 'react-redux';
import { logoutSuccess  } from '../../redux/Actions';
import { useNavigate } from "react-router-dom";

export default function User() {
  const characters = useSelector((state) => state.fav);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess (false)); // Llama a la acción para cambiar el estado de login de true a false
    navigate("/"); // Redirecciona al usuario a la página de inicio (ruta '/home')
  };
 

  return (
    <div>
      <h1>Bienvenido</h1>
      <button onClick={handleLogout}>Login Out</button> 
      {isLoggedIn && Array.isArray(characters) &&
        characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        ))}
    </div>
  );
}


