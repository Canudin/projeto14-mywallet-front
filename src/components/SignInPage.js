import styled from "styled-components";

import Logo from "./Logo";
import SignIn from "./SignIn";

export default function SignInPage() {
  return (
    <SignInPageContainer>
      <Logo />
      <SignIn />
      <a href="/">Primeira vez? Cadastre-se!</a>
    </SignInPageContainer>
  );
}

const SignInPageContainer = styled.div`
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
