import { Container, Brand } from "./styles";
import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Brand>
        <div className="brand-text">
          <strong>Yuri Fabio Sanches</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/YuriFabioSanches.png" alt="Foto do usuário" />
      </Brand>
    </Container>
  );
}