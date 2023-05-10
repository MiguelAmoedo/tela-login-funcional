import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nrsec, setNrsec] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/apiusuario', {
      nome,
      email,
      senha,
      nrsec
    })
    .then(response => {
      if(response.status === 201) {
        alert('Bem-vindo!');
        setNome('');
        setEmail('');
        setSenha('');
        setNrsec('');
      }
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container-a">

      <h1 className='H1'>Cadastro</h1>
      <Form onSubmit={handleSubmit} className='formulario-cadastro-geral'>
        <Form.Group className='formNome'>
          <Form.Label>Nome </Form.Label>
          <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)} required />
        </Form.Group>

        <Form.Group className='formEmail'>
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group className='formSenha'>
          <Form.Label>Senha </Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} required />
        </Form.Group>

        <Form.Group className='formnrsec'>
          <Form.Label>Segurança </Form.Label>
          <Form.Control type="password" placeholder="Digite seu Numero de segurança" value={nrsec} onChange={e => setNrsec(e.target.value)} required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      <div id='botao'>
      <Button  href="/login" >Não tem conta? Clique aqui</Button>
      </div>
    </div>
  );
}

export default Cadastro;
