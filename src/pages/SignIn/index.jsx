import { Container, BackgroundImg, Form, InputWrapper } from "./styles";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Link } from 'react-router-dom'

import { useState } from "react";
import { useAuth } from "../../hooks/authHooks/useAuth"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <InputWrapper>
          <Input 
            placeholder="E-mail" 
            labelId="email" 
            type="email" 
            icon={FiMail}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Senha" 
            labelId="password" 
            type="password" 
            icon={FiLock}
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>

        <div className="button-wrapper">
          <Button 
            title="Entrar"
            onClick={handleSignIn}
          />
        </div>

        <div className="link">
          <Link to="/register">Criar conta</Link>
        </div>
      </Form>

      <BackgroundImg />
    </Container>
  );
}