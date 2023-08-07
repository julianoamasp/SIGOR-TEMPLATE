import { createSlice } from '@reduxjs/toolkit'



export const EventosAbertoStore = createSlice({
    name: 'eventosAbertos',
    initialState: {
        value: [
            {
                id: 1,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Fechado com Pendência",
                borda_color_status: "#dc3545",
                fotos: [
                    { id: 1, nome: "0324.jpg", url: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/14/acidente-tiete-s4scktrgnwog.png", sincronizada: true },
                    { id: 1, nome: "034324.jpg", url: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/07/14/acidente-tiete-s4scktrgnwog.png", sincronizada: false }
                ],
                lat: -23.5505, 
                lng: -46.6333
            },
            {
                id: 2,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Aberto",
                borda_color_status: "#0078d4",
                fotos: [
                    { id: 1, nome: "022324.jpg", url: "https://asset.kompas.com/crops/BkHnz9Dam6AQiqjaf9yb6ZDbDo4=/0x0:0x0/750x500/data/photo/2020/03/22/5e7750c2394b1.jpg", sincronizada: true }
                ],
                lat: -23.538259735367077,
                 lng: -46.62681799486522 
            },
            {
                id: 3,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Aberto",
                borda_color_status: "#0078d4",
                fotos: [],
                lat: -23.55356386033551,
                lng: -46.620981508048814 
            },
            {
                id: 4,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Fiscalizado",
                borda_color_status: "#ffc107",
                fotos: [],
                lat: -23.566644295605734,
                lng: -46.640793724159145 
            },
            {
                id: 5,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Fechado",
                borda_color_status: "#198754",
                fotos: [],
                lat: -23.570066484554278,
                lng: -46.62753288278952 
            },
            {
                id: 6,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Aberto",
                borda_color_status: "#0078d4",
                fotos: [
                    { id: 1, nome: "0543324.jpg", url: "https://www.motorbiscuit.com/wp-content/uploads/2022/10/car-accident-.jpg", sincronizada: true }
                ],
                lat: -23.516500666098022,
                lng: -46.66070508262838 
            },
            {
                id: 7,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                status: "Aberto",
                borda_color_status: "#0078d4",
                fotos: [],
                lat: -23.52098660582966,
                lng: -46.61538647911276 
            },
            {
                id: 8,
                tipo_evento: 1,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Sinistro',
                sub_ocorrencia: 'Acidente sem viitma',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Acidente na marginal grave",
                relevante: true,
                status: "Atendimento",
                borda_color_status: "#0078d4",
                fotos: [],
                lat: -23.53979440792493,
                lng: -46.60989331505026 
            },
            {
                id: 9,
                tipo_evento: 2,
                protocolo: '5646518',
                rodovia: 'Marginal tiête',
                abertura: '02/07/2023 as 12:31',
                ocorrencia: 'Ocorrência',
                sub_ocorrencia: 'Buraco na pista',
                usuario: 'nome',
                celular: '654564',
                km_inicial: 0,
                km_final: 60,
                km: 43,
                observacao: "Buraco na pista, grave.",
                relevante: false,
                status: "Aberto",
                borda_color_status: "#0078d4",
                fotos: [],
                lat: -23.53979440792493,
                lng: -46.60989331505026 
            },
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
export const { getAll, getById, insert, update, remove } = EventosAbertoStore.actions

export default EventosAbertoStore.reducer