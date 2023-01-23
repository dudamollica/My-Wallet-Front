import Logo from "../Assets/MyWallet.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  FormStyle,
  LinkStyle,
} from "../Constants/StyledsComponents";
import { useState, useContext, useEffect} from "react";
import axios from "axios";
import { AuthContext } from "../AppContext/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { saveToken, saveName } = useContext(AuthContext);

  function login(e) {
    e.preventDefault();
    const url = "http://localhost:5000/";
    const body = { email, password };
    const promisse = axios.post(url, body);
    promisse.then((res) => {
      saveToken(res.data.token);
      saveName(res.data.userName);
      navigate("/home");
    });
    promisse.catch((err) => {
      alert("Email ou senha inválidos");
      console.log(err);
    });
  }

  return (
    <Container>
      <LogoStyle src={Logo} />

      <FormStyle onSubmit={login}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Entrar</button>
      </FormStyle>

      <LinkStyle>
        <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
      </LinkStyle>
    </Container>
  );
}

const LogoStyle = styled.img`
  margin-top: 160px;
  margin-bottom: 10px;
`;
