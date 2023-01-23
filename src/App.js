import "./css/reset.css";
import "./css/style.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path={"/"} element={<LoginPage />}/>
          <Route path={"/cadastro"} element={<SignInPage />}/>
          {/* <Route path={"/"} element={<LoginPage />}/> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


