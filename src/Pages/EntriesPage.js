import { FormStyle, Title } from "../Constants/StyledsComponents";
import { AuthContext } from "../AppContext/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EntriesPage() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function submitEntrie(e) {
    e.preventDefault();
    const URL = "http://localhost:5000/nova-entrada";
    const body = { description, amount };
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.post(URL, body, config);
    promise.then((res) => {
      console.log(res);
      navigate("/home");
    });
    promise.catch((err) => console.log(err.data));
  }

  return (
    <>
      <Title>Nova Entrada</Title>
      <FormStyle onSubmit={submitEntrie}>
        <input
          placeholder="Valor"
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
        <button type="submit">Salvar Entrada</button>
      </FormStyle>
    </>
  );
}
