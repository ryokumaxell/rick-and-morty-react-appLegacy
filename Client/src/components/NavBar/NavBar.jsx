import { Link } from 'react-router-dom'
import styleHeader from './NavBar.module.css'
import { useSelector } from 'react-redux';


export default function NavBar() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
      <>
        <header className={styleHeader.container}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <img
            src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png"
            alt="Descripción de la imagen"
            width="300"
            height="200"
          />
          <Link to="/Characters">Characters</Link>
          {isLoggedIn ? (
            <Link to="/User">User</Link>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </header>
      </>
    );
  }
  