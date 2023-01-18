import Logo from "../Assets/MyWallet.png";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormStyle, LinkStyle} from "../Constants/StyledsComponents";

export default function LoginPage() {
  return (
    <Container>
      <LogoStyle src={Logo} />

      <FormStyle>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
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
