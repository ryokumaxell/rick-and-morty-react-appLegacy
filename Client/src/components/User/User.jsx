import { useSelector } from 'react-redux';

export default function User() {
  const characters = useSelector((state) => state.fav);
 

  return (
    <div>
      <h1>Bienvenido</h1>
      {Array.isArray(characters) &&
        characters.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        ))}
    </div>
  );
}

