import Card from "../Card/Card";
import styleCards from '../Cards/Cards.module.css'

export default function Cards({ chars }) {
  
  return (
    <div className={styleCards.container}>
      {chars.map(({ id, name, image }) => {
        return (
          <Card
            key={id}
            image={image}
            name={name}
          />
        );
      })}
    </div>
  );
}
