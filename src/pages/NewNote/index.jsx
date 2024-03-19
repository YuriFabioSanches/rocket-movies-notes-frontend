import { Container, Content, HeaderWrapper, InputWrapper, NoteItensWrapper, NoteItens, ButtonWrapper } from "./styles";

import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Link } from 'react-router-dom'


export function NewNote() {
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <HeaderWrapper>
            <Link to="/"><FiArrowLeft />Voltar</Link>

            <h1>Novo filme</h1>
          </HeaderWrapper>

          <InputWrapper>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </InputWrapper>

          <Textarea placeholder="Observações" />

          <NoteItensWrapper>
            <h2>Marcadores</h2>
            <NoteItens>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </NoteItens>
          </NoteItensWrapper>

          <ButtonWrapper>
            <Button className="inverted-colors" title="Excuilir filme" />
            <Button title="Salvar alterações" />
          </ButtonWrapper>
        </Content>
      </main>
    </Container>
  );
}