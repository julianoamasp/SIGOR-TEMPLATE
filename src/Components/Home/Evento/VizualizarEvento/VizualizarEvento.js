import React from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import { Routes, Route, useParams, useNavigate } from 'react-router-dom';


//mockado
import { useSelector, useDispatch } from 'react-redux'
import { getAll, getById, insert, update, remove } from '../../../../Store/AppStore/EventosMOCKStore'
import { Button } from 'react-bootstrap';
//mockado

export default function VizualizarEvento() {

    const navigate = useNavigate();

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
                        <Badge style={{ width: "100%", margin: "10px 0px" }} bg="success">Prioridade</Badge>
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
                    <Form.Control as="textarea" defaultValue={evento.observacao} rows={3} readOnly />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fotos</Form.Label>
                    <div style={{ display: "flex", gap: "10px" }}>
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
                    {
                        evento.status == "Aberto" ?
                            <button className='btn btn-success'>Atender</button>
                            :
                            (evento.status == "Atendimento" ?
                                <>
                                    <button className='btn btn-danger'>Encerrar c/ Pendência</button>
                                    <button className='btn btn-warning'>Encerrar</button>
                                    <button onClick={() => { navigate("/editar-eventos/" + evento.id); }} className='btn btn-warning'>Editar</button>
                                </>
                                :
                                <button onClick={() => { navigate("/editar-eventos/" + evento.id); }} className='btn btn-warning'>Editar</button>
                            )
                    }
                </div>
            </Form>
        </Container>
    );
}
