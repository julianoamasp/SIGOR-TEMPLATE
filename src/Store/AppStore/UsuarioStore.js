import { createSlice } from '@reduxjs/toolkit'



export const UsuarioStore = createSlice({
    name: 'eventosAbertos',
    initialState: {
        value:
        {
            id: 1,
            tipo: 1,
            nome: "João das Couves",
            cargo: "Operador",
            regional: "DER-10",
            uba: "3 - Ribeirão Preto",
            recurso_ativo: [],
            escala: []
        }
    },
    reducers: {
        getAll: state => {

        },
        getById: (state, action) => {
            action.payload

        },
        insert: (state, action) => {

        },
        update: (state, action) => {

        },
        remove: (state, action) => {

        }
    }
})

// Action creators are generated for each case reducer function
export const { getAll, getById, insert, update, remove } = UsuarioStore.actions

export default UsuarioStore.reducer