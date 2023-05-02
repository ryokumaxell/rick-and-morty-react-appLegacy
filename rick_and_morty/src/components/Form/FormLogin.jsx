import { useState } from "react";

export default function FormLogin() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};

    // Validación de campo email
    if (!formValues.email) {
      newFormErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newFormErrors.email = "Email is invalid";
    }

    // Validación de campo password
    if (!formValues.password) {
      newFormErrors.password = "Password is required";
    }

    // Si hay errores, establece el objeto de estado formErrors
    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
    } else {
      // Si no hay errores, envía el formulario
      console.log("Form submitted:", formValues);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        {formErrors.email && <div>{formErrors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        {formErrors.password && <div>{formErrors.password}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
