import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css'
import Cadastro from './cadastro';

function Login(){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, senha) 
    
    axios.post('http://localhost:5000/apiusuario/user', {
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
  return(
    
    <div class="wrapper fadeInDown">
            <div class="content-login">

             <h2 class="active"> Login </h2>

                <form class="box-login" method="post" action="#"  onSubmit={handleSubmit}>
                    <input type="email" id="email" class="campo" name="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <input type="text" id="password" class="campo" name="senha" placeholder="Senha"  value={senha} onChange={e => setSenha(e.target.value)} required />
                    <input type="submit" class="botao" value="Entrar"/>
                </form>
                <div class="box-lembrar-senha">  
                  <a class="link" href="./cadastro">Crie uma conta</a>
                </div>
            </div>
            
        </div>
  )
};

export default Login;


