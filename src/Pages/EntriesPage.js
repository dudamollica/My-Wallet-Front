import { FormStyle, Title } from "../Constants/StyledsComponents";

export default function EntriesPage() {
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