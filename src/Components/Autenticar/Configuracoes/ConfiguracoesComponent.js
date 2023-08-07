import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function ConfiguracoesComponent() {
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
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Servidor</Form.Label>
              <Form.Control type="text" placeholder="https://10.102.996.5" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Porta</Form.Label>
              <Form.Control type="number" placeholder="4041" />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Form.Group className="mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
            <Link className='btn btn-Secondary' to={`/autenticar`}>Voltar</Link>
            <Button variant="primary">Salvar</Button>{' '}
          </Form.Group>
        </Card.Footer>
      </Card>
    </Container>
  );
}
