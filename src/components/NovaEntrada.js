import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function Saida() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(AuthContext);
  const [deposit, setDeposit] = useState({ value: "", description: "" });
  const type = true; //true = entrada

  function handleSubmit(event) {
    event.preventDefault();
    const { value, description } = deposit;
    if (!value || !description) return;
    const config = {
      headers: { "Authorization": `Bearer ${userData.token}`},
    };
    const request = axios.post("http://localhost:5000/nova-entrada", {
      userId: userData._id,
      value: value,
      description: description,
      type: type,
    });
    request.then((item) => {
      console.log(item);
      navigate("/home");
    });
    request.catch((item) => console.log(item.response.data));
  }
  return (
    <NovaEntradaContainer>
      <Header>
        <span>Nova entrada</span>
      </Header>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          min="0"
          step="0.01"
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
        <button type="submit">Salvar entrada</button>
        <button type="reset" onClick={() => navigate("/home")}>
          Cancelar
        </button>
      </form>
    </NovaEntradaContainer>
  );
}

const NovaEntradaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 15px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form > input {
    width: 330px;
    height: 54px;
    padding-left: 1rem;
    font-size: 1.25rem;
    border-radius: 5px;
    border: none;
    margin-top: 12px;
  }
  form > button {
    width: 330px;
    height: 45px;
    font-size: 1.25rem;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    margin-top: 15px;
    background-color: #a328d6;
    color: #ffffff;
  }
  &:nth-child(3) {
    margin-top: 15px;
  }
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
