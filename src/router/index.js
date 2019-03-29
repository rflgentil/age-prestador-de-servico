import Vue from 'vue'
import Router from 'vue-router'
import FormPrestador from '@/components/formPrestador'
import ListPrestador from '@/components/listPrestador'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/FormPrestador',
            name: 'FormPrestador',
            component: FormPrestador
        },
        {
            path: '/',
            name: 'ListPrestador',
            component: ListPrestador
        }
    ]
})
