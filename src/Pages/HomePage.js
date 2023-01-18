import { Title } from "../Constants/StyledsComponents";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function goEntries() {
    navigate("/nova-entrada");
  }
  function goExits() {
    navigate("/nova-saida");
  }

  return (
    <>
      <ContainerTop>
        <Title>Olá, Fulano </Title>
        <Title>
          <ion-icon name="exit-outline"></ion-icon>{" "}
        </Title>
      </ContainerTop>

      <DataStyle>Não há registros de entrada ou saída</DataStyle>

      <ContainerBottom>
        <div onClick={goEntries}>
          <ion-icon name="add-circle-outline"></ion-icon>
          Nova<br></br>Entrada
        </div>
        <div onClick={goExits}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          Nova<br></br>Saída
        </div>
      </ContainerBottom>
    </>
  );
}

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DataStyle = styled.div`
  height: 446px;
  background-color: white;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #868686;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerBottom = styled.div`
  display: flex;
  height: 114px;
  justify-content: space-between;
  margin-top: 13px;
  div {
    box-sizing: border-box;
    background-color: #a328d6;
    width: 155px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    padding: 10px;
    ion-icon {
      font-size: 25px;
    }
  }
`;
