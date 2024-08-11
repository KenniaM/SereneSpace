import { useState } from "react";
import { signInWithEmail } from "../lib/supabaseAuth"; // Importar la función desde el archivo de servicios
import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Reset error state
    try {
      const result = await signInWithEmail(email, password); // Usar la función importada
      Navigate('')
      console.log(result);
    } catch (error) {
      if (error.status === 429) {
        setError("Too many requests. Please try again later.");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.error(error);
    }
  };
  const redirectToRegister = () => {
    Navigate("/register")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="yourpassword"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <button onClick={redirectToRegister}>Register</button> {/* Botón de registro */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
