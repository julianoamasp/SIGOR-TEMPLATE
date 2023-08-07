import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style.css';

import store from './Store/Store'
import { Provider } from 'react-redux'

import AutenticarComponent from './Components/Autenticar/AutenticarComponent';
import LoginComponent from './Components/Autenticar/LoginComponent/LoginComponent';
import ConfiguracoesComponent from './Components/Autenticar/Configuracoes/ConfiguracoesComponent';

import HomeComponent from './Components/Home/HomeComponent';
import DashboardComponent from './Components/Home/Dashboard/DashboardComponent';

import EventoComponent from './Components/Home/Evento/EventoComponent';
import VizualizarEvento from './Components/Home/Evento/VizualizarEvento/VizualizarEvento';
import EditarEvento from './Components/Home/Evento/EditarEvento/EditarEvento';

import RecursoComponent from './Components/Home/Recurso/RecursoComponent';
import AtendimentoComponent from './Components/Home/Atendimento/AtendimentoComponent';

import OcorrenciaComponent from './Components/Home/Ocorrencia/OcorrenciaComponent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeComponent />,
    children: [
      {
        path: '',
        element: <DashboardComponent />,
      },
      {
        path: 'evento',
        element: <EventoComponent />,
      },
      {
        path: 'vizualizar-eventos/:eventoId',
        element: <VizualizarEvento />,
      },
      {
        path: 'editar-eventos/:eventoId',
        element: <EditarEvento />,
      },
      {
        path: 'adicionar-eventos/:eventoId',
        element: <EventoComponent />,
      },
      {
        path: 'recurso',
        element: <RecursoComponent />,
      },
      {
        path: 'ocorrencia',
        element: <OcorrenciaComponent />,
      },
      {
        path: 'atendimento',
        element: <AtendimentoComponent />,
      },
    ],
  },
  {
    path: '/autenticar',
    element: <AutenticarComponent />,
    children: [
      {
        path: '',
        element: <LoginComponent />,
      },
      {
        path: 'configuracoes',
        element: <ConfiguracoesComponent />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
