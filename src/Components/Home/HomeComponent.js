import React from 'react';

import { Outlet, Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { useSelector, useDispatch } from 'react-redux'
import { startTimer, stopTimer, resetTimer, incrementTime } from '../../Store/AppStore/EventosMOCKStore'

export default function HomeComponent() {

  const UsuarioStore = useSelector(state => state.UsuarioStore.value)
  console.log(UsuarioStore)


  const [show, setShow] = React.useState(false);
  //const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usuario, setUsuario] = React.useState({
    nome: 'operador 1',
    usuario: 'operador1@gmail.com',
    regional: '1 - cotia',
    uba: '12 - são josé',
    cargo: 'Operador',
  });



  return (
    <div
      style={{ display: 'grid', gridTemplateRows: '92% 8%', height: '100vh', margin: "0px" }}
    >








      <Outlet />
      <div style={{
        backgroundColor: "#fdfdfd", borderTop: "1px solid #dfdfdf", display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <nav style={{ width: "100%" }}>
          <ul
            className='menu-bottom'
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '5%',
              margin: "0px",
              padding: "0px"
            }}
          >
            <li>
              <Link to={`/`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg></Link>
            </li>
            <li>
              <Link to={`/evento`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                <path d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
              </svg></Link>
            </li>
            <li>
              <Link to={`/atendimento`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list-check" viewBox="0 0 16 16">
                <path d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
              </svg></Link>
            </li>
            <li>
              <Link to={`/ocorrencia`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
              </svg></Link>
            </li>
            <li>
              <Link onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                <path d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" />
              </svg> </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#ededed" }}>
        <Offcanvas.Header closeButton style={{ borderBottom: "1px solid #dbdbdb" }}>
          <Offcanvas.Title >Menu Usuário</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{
            backgroundColor: "rgb(255 255 255)",
            padding: "15px",
            borderRadius: "5px",

          }}>
            <h1>Olá, {UsuarioStore.nome.split(" ")[0]}</h1>
            <p>
              <b>Cargo:</b> {UsuarioStore.cargo}
              <br />
              <b>Regional:</b> {UsuarioStore.regional}
              <br />
              <b>UBA:</b> {UsuarioStore.uba}
              <br />
              <b>Recurso:</b> {UsuarioStore.recurso_ativo.length == 0 ? <span>Nenhum recurso</span> : <span>{UsuarioStore.recurso_ativo.length} recursos selecionados</span>}
              <br />
              <Link className='btn btn-danger' style={{ width: "100%" }} to={`/autenticar`}>SAIR</Link>
            </p>
          </div>
          <div style={{
            backgroundColor: "white",
            margin: "10px 0px",
            borderRadius: "5px"
          }}>
            <nav>
              <ul
                className='menu-lateral'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '5%', flexDirection: "column"
                }}
              >
                <li>
                  <Link to={`/`}>Mapa</Link>
                </li>
                <li>
                  <Link to={`/evento`}>Eventos</Link>
                </li>
                <li>
                  <Link to={`/atendimento`}>Atendimentos</Link>
                </li>
                <li>
                  <Link to={`/ocorrencia`}>Ocorrências</Link>
                </li>
                <li>
                  <Link to={`/`}>Mensagens</Link>
                </li>
                <li>
                  <Link to={`/`}>Notificações</Link>
                </li>
                <li>
                  <Link to={`/evento`}>Histórico</Link>
                </li>
                <li>
                  <Link to={`/autenticar`}>Ajuda</Link>
                </li>

              </ul>
            </nav>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
