import { Container, Titulo, Tema } from "./styled";
export default function Header({ mudarTemaFuncao }) {
  return (
    <Container>
      <Titulo>Países do mundo🌎</Titulo>
      <Tema onClick={() => mudarTemaFuncao()}> 🌙 Tema Escuro </Tema>
    </Container>
  );
}
