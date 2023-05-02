import { Link } from 'react-router-dom'
import styleHeader from './NavBar.module.css'
export default function NavBar() {
    return(

        <>
        
        <header className={styleHeader.container}>
        <Link to="/" >Home</Link>
        <Link to="/About" >About</Link>
        <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png" alt="Descripción de la imagen" width="300" height="200"/>
        <Link to="/Characters" >Characters</Link>
        <Link to="/Login" >Login</Link>
        </header>
        
        </>
    )
}