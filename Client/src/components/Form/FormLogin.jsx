//login redux
import { loginSuccess } from '../../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

//router
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import styleForm from "../Form/Form.module.css";
import Validation from "./Validation";
import axios from "axios";

export default function FormLogin() {
  const [loginValues, setLoginValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
    setFormErrors(
      Validation({ ...loginValues, [e.target.name]: e.target.value })
    );
  };

  // Llamar a la función en el handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar el login
    const { email, password } = loginValues;

    const URL =
      "https://ryokumaxell-symmetrical-winner-r79gpxvqj64hxrwg-3001.preview.app.github.dev/rickandmorty/api/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;

      if (access) {
        // Loguear al usuario
        dispatch(loginSuccess({ email, password }));
        // Redirigir a la página de User
        navigate("/User");
      } else {
        // Mostrar un mensaje de error
        alert("Usuario o contraseña inválidos");
      }
      
    });
  };

  return (
    <div className={styleForm.container}>
      <Link to="/">
        {" "}
        <img
          src="https://cdn.shopify.com/s/files/1/0042/7563/4222/collections/R_M_collab_logo.jpg"
          alt="rick and morty"
        />
      </Link>

      <h1>Welcome Sign in </h1>

      <form onSubmit={handleSubmit} className={styleForm.container}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginValues.email}
            onChange={handleChange}
          />
          <div>{formErrors.email}</div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <div>{formErrors.password}</div>}
        </div>
        {isLoggedIn && <p>Bienvenido, has iniciado sesión correctamente.</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
