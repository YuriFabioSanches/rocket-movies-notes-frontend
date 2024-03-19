import { FiPlus } from "react-icons/fi"

import { Container, Content, NoteList } from "./styles";

import { Header } from "../../components/Header"
import { Note } from "../../components/Note"
import { Link } from 'react-router-dom'

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <header>
            <h1>Meus filmes</h1>
            <Link to="/new"><FiPlus /> Adicionar filme</Link>
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