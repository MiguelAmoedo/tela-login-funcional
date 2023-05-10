import React from 'react';
import { Container, Row, Nav, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from './login';
import Cadastro from './cadastro';

function Home(){
    return(
       <div>
        <Login/>
       </div>
    )
    
};
export default Home;