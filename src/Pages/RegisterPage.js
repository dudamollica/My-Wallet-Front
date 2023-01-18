import Logo from "../Assets/MyWallet.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormStyle, LinkStyle} from "../Constants/StyledsComponents";

export default function RegisterPage() {
  return (
    <Container>
      <LogoStyle src={Logo} />

      <FormStyle>
        <input type="text" placeholder="Nome"></input>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme a senha"></input>
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
