import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function LoginComponent() {
  return (
    <Container style={{
      width: "100%",
      height: "100vh",
      textAlign: "-webkit-center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Usuário</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="senha" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Link to={`/`} style={{ widows: "100%" }}>ENTRAR</Link>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Link to={`/autenticar/configuracoes`}>CONFIGURAÇÕES</Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
