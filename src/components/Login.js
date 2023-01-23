import styled from "styled-components";
export default function Login() {
  return (
    <LoginContainer>
      <form>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <button /*onSubmit={}*/>Entrar</button>
      </form >
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
  form > button{
    width: 300px;
    height: 54px;
    font-size: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    margin-top: 12px;
    background-color: #A328D6;
    color: #ffffff;
  }
`;
