import { FormStyle, Title } from "../Constants/StyledsComponents";
import { AuthContext } from "../AppContext/auth";
import { useContext } from "react";

export default function ExitsPage() {
  const { token } = useContext(AuthContext);
  return (
    <>
      <Title>Nova Saída</Title>
      <FormStyle>
        <input placeholder="Valor"></input>
        <input type="text" placeholder="Descrição"></input>
        <button type="submit">Salvar Saída</button>
      </FormStyle>
    </>
  );
}
