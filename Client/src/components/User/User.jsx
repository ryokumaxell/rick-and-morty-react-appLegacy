import store from '../../redux/Store';

export default function User() {
  const state = store.getState();
  const characters = state.cards;

  return (
    <div>
      <h1>bienbenido</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
}
