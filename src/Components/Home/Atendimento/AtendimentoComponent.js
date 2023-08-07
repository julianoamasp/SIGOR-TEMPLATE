import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from "react-router-dom";

//mockado
import { useSelector, useDispatch } from 'react-redux'
import { getAll, getById, insert, update, remove } from '../../../Store/AppStore/EventosMOCKStore'
//mockado

export default function AtendimentoComponent() {
  const navigate = useNavigate();



  const eventosMock = useSelector(state => state.EventosMOCKStore.value)
  const [eventos, setEventos] = React.useState(eventosMock.filter((e) => { if (e.status == "Atendimento") { return e; } }));


  //modal busca
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container style={{ overflow: 'auto' }}>

      <div onClick={handleShow} style={{
        position: "absolute",
        right: "5px",
        bottom: "9%",
        zIndex: "1",
        backgroundColor: "#fdfdfd",
        border: "1px solid #dfdfdf",
        padding: "12px 14px",
        borderRadius: "50%",
        boxShadow: "0px 0px 5px 1px #00000024"
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtrar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Protocolo</Form.Label>
              <Form.Control type="email" placeholder="4565885584" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Data abertura</Form.Label>
              <Form.Control type='date' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Limpar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buscar
          </Button>
        </Modal.Footer>
      </Modal>


      {eventos.map((e, key) => {
        return (

          <Card key={key} onClick={() => { navigate("/vizualizar-eventos/" + e.id); }}
            style={{ width: '100%', marginTop: '12px', marginBottom: '12px', borderLeft: "4px solid " + e.borda_color_status }}
          >
            <Card.Body>
              {
                e.relevante ?
                  <Badge bg="success">Prioridade</Badge>
                  :
                  null
              }
              <table width="100%">
                <thead>
                  <tr>
                    <th>Protocolo</th>
                    <th>Abertura</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{e.protocolo}</td>
                    <td>{e.abertura}</td>
                  </tr>
                  <tr>
                    <th>Rodovia</th>
                    <th>KM</th>
                  </tr>
                  <tr>
                    <td>{e.rodovia}</td>
                    <td>{e.km}</td>
                  </tr>
                  <tr>
                    <th>Ocorrência</th>
                    <th>Subocrrência</th>
                  </tr>
                  <tr>
                    <td>{e.ocorrencia}</td>
                    <td>{e.sub_ocorrencia}</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>

        );
      })}
    </Container>
  );
}
