import { FormStyle, Title } from "../Constants/StyledsComponents";
import { AuthContext } from "../AppContext/auth";
import { useContext } from "react";

export default function EntriesPage() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Title>Nova Entrada</Title>
      <FormStyle>
        <input placeholder="Valor"></input>
        <input type="text" placeholder="Descrição"></input>
        <button type="submit">Salvar Entrada</button>
      </FormStyle>
    </>
  );
}