import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormStyle = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
  background: #ffffff;
  border-radius: 5px;
  width: 90%;
  height: 58px;
  border-color: #ffffff;
  margin: 11px;
  color: #000000;
  font-weight: 400;
  font-size: 20px;
  padding-left: 15px;
}
input::placeholder {
  color: #000000;
  font-weight: 400;
  font-size: 20px;
}
button {
  background: #a328d6;
  border-color: #a328d6;
  border-radius: 5px;
  width: 326px;
  height: 46px;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-top: 11px;
  margin-bottom: 25px;
  color: #ffffff;
}
`;

export const LinkStyle = styled.span`
  a {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Title = styled.div`
margin-top: 25px;
margin-bottom: 25px;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
`