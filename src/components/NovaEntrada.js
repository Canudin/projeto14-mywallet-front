import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

export default function Entrada() {
  const navigate = useNavigate();
  const [deposit, setDeposit] = useState({ value: "", description: "" });

  function handleSubmit(event){
    event.preventDefault();
    const { email, password } = userLogin;
    if (!email || !password) return;
    const request = axios.post("http://localhost:5000/nova-entrada", {
      email: email,
      password: password,
    });
    request.then((item) => {
      console.log(item);
      navigate("/home");
    });
    request.catch((item) => console.log(item.response.data));
  }
  return (
    <HomeContainer>
      <Header>
        <span>Nova entrada</span>
        <ion-icon name="exit-outline"></ion-icon>
      </Header>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Valor"
          onChange={(content) => {
            setDeposit({ ...deposit, value: content.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Descrição"
          onChange={(content) => {
            setDeposit({ ...deposit, description: content.target.value });
          }}
        />
      </form>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
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
