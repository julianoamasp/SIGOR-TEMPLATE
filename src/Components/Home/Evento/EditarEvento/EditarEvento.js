import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import { Routes, Route, useParams } from 'react-router-dom';

//mockado
import { useSelector, useDispatch } from 'react-redux'
import { getAll, getById, insert, update, remove } from '../../../../Store/AppStore/EventosMOCKStore'
import { Button } from 'react-bootstrap';
//mockado

export default function EditarEvento() {

    const eventoIdParam = useParams()
    console.log(eventoIdParam.eventoId);

    const dispatch = useDispatch()
    const eventosMock = useSelector(state => state.EventosMOCKStore.value)
    console.log(eventosMock.filter((e) => { if (e.id == eventoIdParam.eventoId) { return e; } })[0])
    const [evento, setEvento] = React.useState(eventosMock.filter((e) => { if (e.id == eventoIdParam.eventoId) { return e; } })[0]);

    return (
        <Container>
            <Form>
                {
                    evento.relevante ?
                        <Badge style={{width: "100%", margin: "10px 0px"}} bg="success">Prioridade</Badge>
                        :
                        null
                }
                <h1 style={{ textAlign: "center" }}>{evento.status}</h1>

                <div col="12" className="mb-3">
                    <div className='row'>
                        <div className="col">
                            <label >Abertura:</label>
                            <input type="email" className="form-control" defaultValue={evento.abertura} readOnly />
                        </div>
                        <div className="col">
                            <label >Protocolo:</label>
                            <input type="text" className="form-control" defaultValue={evento.protocolo} readOnly />
                        </div>
                    </div>
                </div>
                <div col="12" className="mb-3">
                    <div className='row'>
                        <div className="col-8">
                            <label >Usuário:</label>
                            <input type="email" className="form-control" defaultValue={evento.usuario} readOnly />
                        </div>
                        <div className="col-4">
                            <label >Celular:</label>
                            <input type="text" className="form-control" defaultValue={evento.celular} readOnly />
                        </div>
                    </div>
                </div>
                <div col="12" className="mb-3">
                    <div className='row'>
                        <div className="col">
                            <label >Ocorrência:</label>
                            <input type="email" className="form-control" defaultValue={evento.ocorrencia} readOnly />
                        </div>
                        <div className="col">
                            <label >Subocorrência:</label>
                            <input type="text" className="form-control" defaultValue={evento.sub_ocorrencia} readOnly />
                        </div>
                    </div>
                </div>
                <div col="12" className="mb-3">
                    <div className='row'>
                        <div className="col-10">
                            <label >Rodovia:</label>
                            <input type="email" className="form-control" defaultValue={evento.rodovia} readOnly />
                        </div>
                        <div className="col-2">
                            <label >KM:</label>
                            <input type="text" className="form-control" defaultValue={evento.km} readOnly />
                        </div>
                    </div>
                </div>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Observação
                    </Form.Label>
                    <Form.Control as="textarea" defaultValue={evento.observacao} rows={3} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fotos</Form.Label>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Form.Control type="file" />
                        <Button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg></Button>
                    </div>
                </Form.Group>
                {
                    evento.fotos.length > 0 ?
                        <table>
                            <thead>
                                <tr>
                                    <th>Imagem</th>
                                    <th>Nome</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {evento.fotos.map((e, key) => {
                                    return (<>
                                        <tr key={key}>

                                            <td style={{ width: "33.333333%" }}>
                                                <img style={{ maxWidth: "20%", maxHeight: "20%" }} src={e.url} />
                                            </td>
                                            <td style={{ width: "33.333333%" }}>{e.nome}</td>
                                            <td style={{ width: "33.333333%" }}>{e.sincronizada ? "Sincronizada" : <button>Sincronizar</button>}</td>
                                        </tr>

                                    </>)
                                })}
                            </tbody>
                        </table>
                        :
                        <h4 style={{ textAlign: "center" }}>Sem imagens</h4>
                }
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px",
                    border: "1px solid #dee2e6",
                    borderRadius: "5px",
                    margin: "5px 0px",
                    backgroundColor: "#fdfdfd"
                }}>
                    <button>Ecerrar</button>
                    <button>Encerrar c/ pendência</button>
                    <button>Salvar Atualização</button>
                </div>
            </Form>
        </Container>
    );
}
