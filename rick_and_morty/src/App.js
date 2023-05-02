import styleApp from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./view/Home/Home";
import Characters from "./view/Characters/Characters";
import About from "./view/About/About";
import AuthForm from "./view/AuthForm/AuthForm";
import Detail from "./view/Detail/Detail";
import Error404 from "./view/Error404/Error404";

export default function App() {
 

  return (
    <div className={styleApp.container}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Login" element={<AuthForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      
    </div>
  );
}