import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function AtendimentoEditarComponent() {
  return (
    <Container>
      <Form>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Protocolo</Form.Label>
            <Form.Control type="text" placeholder="name@example.com" readOnly />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Protocolo</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              readOnly
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>
            Observação <button>Sincronizar</button>
          </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Fotos</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <div>
          <div>
            Foto 1.jpg Armazenado local <button>Sincronizar</button>
          </div>
          <div>Foto 1.jpg Sincrozada</div>
        </div>
        <div>
          <button>Ecerrar</button>
          <button>Encerrar c/ pendência</button>
          <button>Salvar Atualização</button>
        </div>
      </Form>
    </Container>
  );
}
