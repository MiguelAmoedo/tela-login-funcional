import React, { useState } from 'react';
import { Container, Row, Nav, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Cadastro(){
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    nrsec: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/apiusuario', formData);
      console.log(response.data);
      alert('inserido!');
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <div className="container">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="nrsec">Número de segurança:</label>
          <input type="text" id="nrsec" name="nrsec" value={formData.nrsec} onChange={handleChange} required/>
        </div>
        <button type="submit" className="submit-btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
