import Vue from 'vue'
import Router from 'vue-router'
import FormPrestador from '@/components/formPrestador'
import ListPrestador from '@/components/listPrestador'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/FormPrestador/:id?',
            name: 'editarPrestador',
            component: FormPrestador,
            meta: {
                title: 'Prestador de Serviço'
            }
        },
        {
            path: '/',
            name: 'ListPrestador',
            component: ListPrestador,
            meta: {
                title: 'Prestadores de Serviço'
            }
        }
    ]
})
