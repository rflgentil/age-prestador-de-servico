import API from '@/services/api'

export default {
    getPage1 (params) {
        return API().get('/prestadores')
    }
}
