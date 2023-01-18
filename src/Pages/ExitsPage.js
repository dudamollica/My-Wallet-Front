import { FormStyle, Title } from "../Constants/StyledsComponents";

export default function ExitsPage() {
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
