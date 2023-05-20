export default function Validation(data){
    let errors = {};

    if (data.email.includes(!/\S+@\S+\.\S+/)) {
        return errors.email = "Email is invalid";
      } 
      
      if (!data.email) {
        return errors.email = "Email is required";
      }
  
      // Validación de campo password
      if (!data.password) {
        return errors.password = "Password is required";
      }
  
      return errors;
}