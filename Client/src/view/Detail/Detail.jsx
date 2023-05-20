import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchData } from '../../data/Data';

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  

  useEffect(() => {
    const getData = async () => {
      const results = await fetchData();
      const character = results.find((c) => c.id === Number(id));
      if (character) {
        setCharacter(character);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    };
  
    getData();
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      {/* Muestra otros detalles del personaje aquí */}
    </div>
  );
}
