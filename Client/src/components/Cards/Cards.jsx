import Card from "../Card/Card";
import styleCards from '../Cards/Cards.module.css'

export default function Cards({ characters }) {
   return (
    <div className={styleCards.container}>
      {characters.map(({ id,image,name }) => {
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