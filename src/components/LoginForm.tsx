
import { useState } from "react";
import { useAuth } from "../context/useAuth";
import type { SubmitEvent } from "react";

function LoginForm() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (email === "" || senha === "") {
      setErro("Preencha todos os campos.");
      return;
    }

    login();
    setErro("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Entrar</h2>

      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Digite seu e-mail"
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        value={senha}
        onChange={(event) => setSenha(event.target.value)}
        placeholder="Digite sua senha"
      />

      {erro && <p>{erro}</p>}

      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
