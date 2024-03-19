import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi"

import { Container, Form, InputWrapper, Avatar } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from 'react-router-dom'


export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft />Voltar</Link>
      </header>

      <Form>
      <Avatar>
          <img src="https://github.com/YuriFabioSanches.png" alt="Foto do usuário" />
          
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <InputWrapper>
          <Input placeholder="Nome" type="text" labelId="name" icon={FiUser} />
          <Input placeholder="E-mail" type="email" labelId="email" icon={FiMail} />
          <Input placeholder="Senha atual" type="password" labelId="password" icon={FiLock} />
          <Input placeholder="Nova senha" type="password" labelId="new-password" icon={FiLock} />
        </InputWrapper>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}