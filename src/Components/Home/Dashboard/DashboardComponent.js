import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import GoogleMapReact from 'google-map-react';

import { GOOGLEMAPS_KEY } from '../../../Config'

//mockado
import { useSelector, useDispatch } from 'react-redux'
import { getAll, getById, insert, update, remove } from '../../../Store/AppStore/EventosMOCKStore'
//mockado


export default function DashboardComponent() {

  const eventosMock = useSelector(state => state.EventosMOCKStore.value)
  const [eventos, setEventos] = React.useState(eventosMock);


  const handleApiLoaded = (map, maps) => {
    //evento
    let timeoutId;

    map.addListener('mousedown', event => {
      timeoutId = setTimeout(() => mapTouchHoldHandler(event), 3000);
    });

    map.addListener('mouseup', () => clearTimeout(timeoutId));

    //evento
    markers.forEach(marker => {
      const markerIcon = {
        url: 'https://cdn1.iconfinder.com/data/icons/accident-1/100/Accident-02-512.png',
        scaledSize: new maps.Size(50, 50)
      };

      const mapMarker = new maps.Marker({
        position: marker,
        map,
        icon: markerIcon
      });

      mapMarker.addListener('click', () => abrirItem(marker));
    });
    //console.log(map)
    //console.log(maps)
  };

  const mapTouchHoldHandler = (event) => {
    //event.latLng.lat(), event.latLng.lng()
    console.log(`Map clicked at latitude: ${event.latLng.lat()}, longitude: ${event.latLng.lng()}`);
    console.log(event)
  };

  const [markers, setMarkers] = React.useState(eventosMock);

  /*
       {
            markers.map((marker, index) => (
              <CustomMarker key={index} lat={marker.lat} lng={marker.lng} />
            ))
          }
  */


  //modal
  const [showModalItem, setShowModalItem] = React.useState(false);

  const handleClose = () => setShowModalItem(false);
  const handleShowModalItem = () => setShowModalItem(true);

  const [eventoSelecionado, setEventoSelecionado] = React.useState(null);
  const abrirItem = function (evento) {
    handleShowModalItem();
    setEventoSelecionado(evento)
    console.log(evento)
  }

  return (
    <div style={{ height: '100%', width: '100%', top: "0px", left: "0px" }} className="top-section" >
      <GoogleMapReact

        bootstrapURLKeys={{ key: GOOGLEMAPS_KEY }}

        defaultCenter={{
          lat: -23.5505,
          lng: -46.6333
        }}
        defaultZoom={11}
        options={{ disableDefaultUI: true }}

        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >



      </GoogleMapReact>


      <Modal show={showModalItem} onHide={setShowModalItem}>
        <Modal.Header closeButton>
          <Modal.Title>Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {
              eventoSelecionado != null ?
                <>
                <h1>{eventoSelecionado.status}</h1>
                  <div col="12" className="mb-3">
                    <div className='row'>
                      <div className="col">
                        <label >Latitude:</label>
                        <input type="email" className="form-control" defaultValue={eventoSelecionado.lat} readOnly />
                      </div>
                      <div className="col">
                        <label >Longitude:</label>
                        <input type="text" className="form-control" defaultValue={eventoSelecionado.lng} readOnly />
                      </div>
                    </div>
                  </div>
                  <div col="12" className="mb-3">
                    <div className='row'>
                      <div className="col">
                        <label >Abertura:</label>
                        <input type="email" className="form-control" defaultValue={eventoSelecionado.abertura} readOnly />
                      </div>
                      <div className="col">
                        <label >Protocolo:</label>
                        <input type="text" className="form-control" defaultValue={eventoSelecionado.protocolo} readOnly />
                      </div>
                    </div>
                  </div>
                  <div col="12" className="mb-3">
                    <div className='row'>
                      <div className="col">
                        <label >Ocorrência:</label>
                        <input type="email" className="form-control" defaultValue={eventoSelecionado.ocorrencia} readOnly />
                      </div>
                      <div className="col">
                        <label >Subocorrência:</label>
                        <input type="text" className="form-control" defaultValue={eventoSelecionado.sub_ocorrencia} readOnly />
                      </div>
                    </div>
                  </div>
                  <div col="12" className="mb-3">
                    <div className='row'>
                      <div className="col-8">
                        <label >Rodovia:</label>
                        <input type="email" className="form-control" defaultValue={eventoSelecionado.rodovia} readOnly />
                      </div>
                      <div className="col-4">
                        <label >KM:</label>
                        <input type="text" className="form-control" defaultValue={eventoSelecionado.km} readOnly />
                      </div>
                    </div>
                  </div>
                  
                </>
                :
                null
            }

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
    </div>)
}








/*

const CustomMarker = ({ lat, lng }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: 'red',
        boxShadow: '0 0 6px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer'
      }}
      onClick={handleMarkerClick}
    >
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px',
            backgroundColor: 'white',
            boxShadow: '0 2px 7px rgba(0, 0, 0, 0.3)',
            zIndex: 1
          }}
          onClick={handlePopupClick}
        >
          <p>Alguma informação aleatória aqui.</p>
          <button onClick={handleCloseClick} style={{ float: 'right' }}>
            Fechar
          </button>
        </div>
      )}
      <img
        src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        alt="Pin"
        style={{ width: '100%' }}
      />
    </div>
  );
};*/