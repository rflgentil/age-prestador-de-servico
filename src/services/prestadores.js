import API from '@/services/api'

export default {
    // Salva prestador
    savePrestador: (data) => API.post('prestadores', data).then(response => response),

    // Retorna todos Prestadores
    getAllPrestadores: params => API.get('prestadores').then(response => response),

    // Retorna Prestador
    getPrestador: id => API.get(`prestadores/${id}`).then(response => response),

    // Edita prestador
    editPrestador: (id, data) => API.put(`prestadores/${id}`, data).then(response => response),

    // Apaga prestador
    deletePrestador: id => API.delete(`prestadores/${id}`).then(response => response)
}
