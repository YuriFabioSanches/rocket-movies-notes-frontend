import { FiMail, FiLock } from "react-icons/fi"

import { Container, BackgroundImg, Form, InputWrapper } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <InputWrapper>
          <Input placeholder="E-mail" labelId="email" type="email" icon={FiMail} />
          <Input placeholder="Senha" labelId="password" type="password" icon={FiLock} />
        </InputWrapper>

        <div className="button-wrapper">
          <Button title="Entrar" />
        </div>

        <div className="link">
          <a>Criar conta</a>
        </div>
      </Form>

      <BackgroundImg />
    </Container>
  );
}