import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [userSignIn, setUserSignIn] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const navigate = useNavigate();

  function handleSignIn(event) {
    event.preventDefault();
    const { name, email, password, repeat_password } = userSignIn;
    if (password !== repeat_password) return;
    if (!name || !email || !password) return;
    const request = axios.post("http://localhost:5000/cadastro", {
      name: name,
      email: email,
      password: password,
      repeat_password: repeat_password
    });
    request.then((item) => {
      navigate("/");
      console.log(item);
    });
    request.catch((item) => console.log(item.response.data));
  }

  return (
    <SignInContainer>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(content) => {
            setUserSignIn({ ...userSignIn, name: content.target.value });
          }}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(content) => {
            setUserSignIn({ ...userSignIn, email: content.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(content) => {
            setUserSignIn({ ...userSignIn, password: content.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          onChange={(content) => {
            setUserSignIn({ ...userSignIn, repeat_password: content.target.value });
          }}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  }
  form > input {
    width: 300px;
    height: 54px;
    padding-left: 1rem;
    font-size: 1.25rem;
    border-radius: 5px;
    border: none;
    margin-top: 12px;
  }
  form > button {
    width: 300px;
    height: 54px;
    font-size: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    margin-top: 12px;
    background-color: #a328d6;
    color: #ffffff;
  }
`;
