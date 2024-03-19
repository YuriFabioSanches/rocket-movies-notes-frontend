import { FiPlus } from "react-icons/fi"

import { Container, Content, NoteList } from "./styles";

import { Header } from "../../components/Header"
import { Note } from "../../components/Note"

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <a href="#"><FiPlus /> Adicionar filme</a>
          </header>

          <NoteList>
            <Note />
            <Note />
            <Note />
          </NoteList>
        </Content>
      </main>
    </Container>
  );
}