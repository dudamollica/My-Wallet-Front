import { Title } from "../Constants/StyledsComponents";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../AppContext/auth";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();
  const { token, userName } = useContext(AuthContext);
  const [registers, setRegisters] = useState([]);

  useEffect(() => {
    const URL = "http://localhost:5000/home";
    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((res) => {
      setRegisters(res.data);
    });
    promise.catch((err) => console.log(err.data));
  }, []);

  function goEntries() {
    navigate("/nova-entrada");
  }
  function goExits() {
    navigate("/nova-saida");
  }

  return (
    <>
      <ContainerTop>
        <Title>Olá, {userName} </Title>
        <Title
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          <ion-icon name="exit-outline"></ion-icon>{" "}
        </Title>
      </ContainerTop>

      <DataStyle register={registers.length}>
        {registers.length == 0
          ? "Não há registros de entrada ou saída"
          : registers.map((r) => {
              return (
                <div key={r._id}>
                  <Date>{r.date}</Date>
                  <Description>{r.description}</Description>
                  <Amount type={r.type}>{r.amount}</Amount>
                </div>
              );
            })}
      </DataStyle>

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
  border-radius: 5px;
  overflow: scroll;
  display: ${(props) => props.register == 0 && "flex"};
  align-items: ${(props) => props.register == 0 && "center"};
  justify-content: ${(props) => props.register == 0 && "center"};
  padding-top: ${(props) => props.register != 0 && "10px;"};
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 10px;
  }
`;

const Date = styled.span`
  color: #c6c6c6;
`;
const Description = styled.span`
  color: #000000;
`;
const Amount = styled.span`
  color: ${(props) => (props.type == "input" ? "#03AC00" : "#C70000")};
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
