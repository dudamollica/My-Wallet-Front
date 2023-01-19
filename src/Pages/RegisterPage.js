import Logo from "../Assets/MyWallet.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormStyle,
  LinkStyle,
} from "../Constants/StyledsComponents";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const navigate = useNavigate();

  function submitRegister(e) {
    e.preventDefault();
    const url = "http://localhost:5000/cadastro";
    const body = { name, email, password };

    if (password === passConfirm) {
      const promisse = axios.post(url, body);
      promisse.then(() => navigate("/"));
      promisse.catch((err) => console.log(err));
    } else {
      alert("As senhas são diferentes");
    }
  }

  return (
    <Container>
      <LogoStyle src={Logo} />

      <FormStyle onSubmit={submitRegister}>
        <input
          type="text"
          placeholder="Nome"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Confirme a senha"
          required
          value={passConfirm}
          onChange={(e) => setPassConfirm(e.target.value)}
        ></input>
        <button type="submit">Cadastrar</button>
      </FormStyle>

      <LinkStyle>
        <Link to="/">Já tem uma conta? Entre agora!</Link>
      </LinkStyle>
    </Container>
  );
}

const LogoStyle = styled.img`
  margin-top: 95px;
  margin-bottom: 10px;
`;
