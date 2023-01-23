import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AuthContext);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const request = axios.get("http://localhost:5000/home", config);
    request.then((item) => console.log(item));
    return () => {};
  }, []);

  return (
    <HomeContainer>
      <Greetings>
        <span>Olá, Fulano</span>
        <ion-icon name="exit-outline"></ion-icon>
      </Greetings>
      <Registers />
      <Entries>
        <NewEntry onClick={navigate("/nova-entrada")}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <span>Nova entrada</span>
        </NewEntry>
        <NewEntry onClick={navigate("/nova-saida")}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <span>Nova saída</span>
        </NewEntry>
      </Entries>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Greetings = styled.div`
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 30px;
  font-size: 1.5rem;
  color: #ffffff;
  justify-content: space-between;
  align-items: center;
`;

const Registers = styled.div`
  width: 330px;
  height: calc(100vh - 220px);
  background-color: #ffffff;
  margin: 20px 0;
  border-radius: 5px;
`;

const Entries = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NewEntry = styled.div`
  width: 155px;
  height: 115px;
  padding: 20px;
  background-color: #a328d6;
  border-radius: 5px;
  display: grid;
  flex-direction: column;
  align-content: space-between;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  span {
    width: 60px;
  }
`;
