import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

export default function RecursoComponent() {
  const [recurso, setRecurso] = React.useState([
    {
      nome: 'Viatura',
      numero: '2343432432-23',
      status: 'Livre',
      status_class: 'success',
    },
    {
      nome: 'Viatura',
      numero: '2343432432-23',
      status: 'Ocupado',
      status_class: 'warning',
    },
    {
      nome: 'Viatura',
      numero: '2343432432-23',
      status: 'Danificado',
      status_class: 'danger',
    },
  ]);

  return (
    <Container style={{ overflow: 'auto' }}>
      {recurso.map((e) => {
        return (
          <>
            <Card
              style={{ width: '100%', marginTop: '7px', marginBottom: '7px' }}
            >
              <Card.Body>
                <div>
                  <Badge bg={e.status_class}>{e.status}</Badge>
                  <Form.Label>
                    <b>Nome:</b> {e.nome}
                  </Form.Label>
                  <Form.Label>
                    <b>Código:</b> {e.numero}
                  </Form.Label>
                </div>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </Container>
  );
}
