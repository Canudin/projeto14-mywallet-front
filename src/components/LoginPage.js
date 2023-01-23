import styled from "styled-components";

import Logo from "./Logo";
import Login from "./Login";

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <Logo />
      <Login />
      <a href="/cadastro">Primeira vez? Cadastre-se!</a>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  a{
    margin-top: 30px;
    color: #ffffff;
    font-size: 1rem;
    text-decoration: none;
  }
`;
