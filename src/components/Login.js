import styled from "styled-components";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const { email, password } = userLogin;
    if (!email || !password) return;
    const request = axios.post("http://localhost:5000/", {
      email: email,
      password: password,
    });
    request.then((item) => {
      setUserData({ ...userData, token: item.data});
      navigate("/home");
    });
    request.catch((item) => {
      console.log("deu ruim");
      console.log(item.response.data);
    });
  }
  return (
    <LoginContainer>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          onChange={(content) => setUserLogin({ ...userLogin, email: content.target.value })}
        />
        <input
          type="text"
          placeholder="Senha"
          onChange={(content) => {
            setUserLogin({ ...userLogin, password: content.target.value });
          }}
        ></input>
        <button type="submit">Entrar</button>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
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
