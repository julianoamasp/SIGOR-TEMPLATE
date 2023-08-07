import { createSlice } from '@reduxjs/toolkit'



export const OcorrenciaMOCKStore = createSlice({
    name: 'eventosAbertos',
    initialState: {
        value: [
            {
                id: 1,
                tipo: 1,
                nome_tipo:"Buraco",
                data_abertura: "05/02/2023 às 12:30",
                autor: "Fulano Pereira",
                cargo: "Operador"
            }
           
        ]
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
export const { getAll, getById, insert, update, remove } = OcorrenciaMOCKStore.actions

export default OcorrenciaMOCKStore.reducer