import { Link } from 'react-router-dom';
import styleError from '../Error404/Error404.module.css'
export default function Error404() {
  return (
   
    <Link className={styleError.container} to={"/"}>
        <span>4</span> 
        <img src="https://staticdelivery.nexusmods.com/mods/1151/images/528-0-1447526230.png" alt="rick and morty" />
        <span>4</span> 
      </Link>
    
  );
}
