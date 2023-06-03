import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { fetchData } from '../../data/Data';

export default function Detail() {
  const { name } = useParams();
  const [character, setCharacter] = useState([]);
  console.log(character);
  console.log(name);
  
  

  useEffect(() => {
    fetchData()
      .then(data => {
       const character = data.resuls.find((c) => c.name === name);
        if (character) {
          setCharacter(character);
        } else {
          window.alert('No hay personajes con ese nombre');
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, [name]);
  
  

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
   
    </div>
  );
}
