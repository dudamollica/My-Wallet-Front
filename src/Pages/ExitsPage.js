import { FormStyle, Title } from "../Constants/StyledsComponents";
import { AuthContext } from "../AppContext/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ExitsPage() {
  const { token } = useContext(AuthContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  function submitExit(e) {
    e.preventDefault();
    const URL = "http://localhost:5000/nova-saida";
    const body = { description, amount };
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(URL, body, config);
    promise.then((res) => {
      navigate("/home");
    });
    promise.catch((err) => console.log(err.data));
  }

  return (
    <>
      <Title>Nova Saída</Title>
      <FormStyle onSubmit={submitExit}>
        <input
          placeholder="Valor R$"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></input>
        <button type="submit">Salvar Saída</button>
      </FormStyle>
    </>
  );
}
