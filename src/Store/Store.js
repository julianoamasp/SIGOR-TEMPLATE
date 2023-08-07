import { configureStore } from '@reduxjs/toolkit'

import EventosMOCKStore from './AppStore/EventosMOCKStore';
import UsuarioStore from './AppStore/UsuarioStore';

const store = configureStore({
  reducer: {
    EventosMOCKStore: EventosMOCKStore,
    UsuarioStore: UsuarioStore
  }
})

export default store;