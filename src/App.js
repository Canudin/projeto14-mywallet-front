import "./css/reset.css";
import "./css/style.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";

import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";
import HomePage from "./components/HomePage";
import NovaEntrada from "./components/NovaEntrada";
import { useState } from "react";

export default function App() {
  const [userData, setUserData] = useState({
    name: "",
    _id: "",
    email: "",
    token: "",
  });
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path={"/"} element={<LoginPage />} />
            <Route path={"/cadastro"} element={<SignInPage />} />
            <Route path={"/home"} element={<HomePage />} />
            <Route path={"/nova-entrada"} element={<NovaEntrada />} />
            <Route path={"/nova-saida"} element={<HomePage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
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
