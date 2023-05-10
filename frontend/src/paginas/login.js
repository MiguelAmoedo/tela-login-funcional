import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/apiusuario', {
      email,
      senha
    })
    .then(response => {
      if(response.status === 200, 201) {
        alert('Bem-vindo!');
        setEmail('');
        setSenha('');
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container-a">

      <h1 className='H1'>Login</h1>
      <Form onSubmit={handleSubmit} className='formulario-cadastro-geral'>
        <Form.Group className='formEmail'>
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group className='formSenha'>
          <Form.Label>Senha </Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
      <div id='botao'>
        <Button href="/cadastro">Não tem conta? Clique aqui</Button>
      </div>
    </div>
  );
}

export default Login;
