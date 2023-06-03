//Routes View
import Home from "../view/Home/Home";
import Characters from "../view/Characters/Characters";
import About from "../view/About/About";
import AuthForm from "../view/AuthForm/AuthForm";
import Detail from "../view/Detail/Detail";
import Error404 from "../view/Error404/Error404";
import User from "../components/User/User";
import NavBar from "../components/NavBar/NavBar";
//Library
import { Route, Routes,useLocation  } from "react-router-dom";

export default function AppRoutes() {
  const isLoginRoute = useLocation().pathname === "/Login";
  return (
    <>
      {!isLoginRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/detail/:name" element={<Detail />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
