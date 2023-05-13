import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styleForm from "../Form/Form.module.css";
import Validation from "./Validation";

export default function FormLogin() {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
    setFormErrors(
      Validation({ ...loginValues, [e.target.name]: e.target.value })
    );
  };

  // Crear un objeto con las credenciales que quieres usar
  let Employer = {
    email: "email@email.com",
    password: "password123",
  };

  // Crear una función para validar el login
  const validateLogin = (username, password) => {
    // Comparar los valores ingresados con las credenciales
    if (username === Employer.email && password === Employer.password) {
      // Devolver true si son iguales
      return true;
    } else {
      // Devolver false si son diferentes
      return false;
    }
  };

  const navigate = useNavigate();

  // Llamar a la función en el handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtener los valores del estado
    const { email, password } = loginValues;
    // Validar el login
    const isAuthenticated = validateLogin(email, password);

    if (isAuthenticated) {
      // Loguear al usuario
      // Redirigir a la página de inicio
      navigate("/User");
    } else {
      // Mostrar un mensaje de error
      alert("Usuario o contraseña inválidos");
    }
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
