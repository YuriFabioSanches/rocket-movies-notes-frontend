import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Container, BackgroundImg, Form, InputWrapper } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from 'react-router-dom'

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <InputWrapper>
          <Input placeholder="Nome" labelId="name" type="text" icon={FiUser} />
          <Input placeholder="E-mail" labelId="email" type="email" icon={FiMail} />
          <Input placeholder="Senha" labelId="password" type="password" icon={FiLock} />
        </InputWrapper>

        <div className="button-wrapper">
          <Button title="Cadastrar" />
        </div>

        <div className="link">
          <Link to="/"><FiArrowLeft /> Voltar para o login</Link>
        </div>
      </Form>
      
      <BackgroundImg />
    </Container>
  );
}