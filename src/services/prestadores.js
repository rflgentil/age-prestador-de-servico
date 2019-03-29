import API from '@/services/api'

export default {
    // Retorna todos Prestadores
    getAllPrestadores: params => API.get('prestadores').then(response => response),

    // Retorna Prestador
    getPrestador: params => API.get(`prestadores/${params}`).then(response => response),

    // Apaga prestador
    deletePrestador: params => API.delete(`prestadores/${params}`).then(response => response)
}
