import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router'
import VueMaterial from 'vue-material'
import FormPrestador from '@/components/formPrestador'
import Vuelidate from 'vuelidate'
import { validCPF, validaCNPJ, verificaCpfCnpj } from '@/helpers/helpers'

Vue.use(VueMaterial)
Vue.use(Vuelidate)

const localVue = createLocalVue()
localVue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/formPrestador'
        }
    ]
})

describe('FormPrestador', () => {
    let wrapper

    beforeAll(() => {
        wrapper = mount(FormPrestador, { localVue, router })
    })

    test('O estado inicial dos campos é vazio', () => {
        expect(wrapper.vm.$v.$invalid).toBeTruthy()
    })

    test('Os campos obrigatórios do form foram preenchidos e se são válidos', () => {
        wrapper.setData({
            form: {
                nome: 'Rafael gentil',
                email: 'Rafae.dsds@gmea.com',
                razaoSocial: 'sdsds ',
                documento: '32922270890',
                cep: '07114420',
                endereco: 'Rafael gentil',
                numero: '278',
                complemento: '',
                bairro: 'Rafael gentil',
                cidade: 'Rafael gentil',
                estado: 'Rafael gentil'
            }
        })

        expect(wrapper.vm.$v.$invalid).toBeFalsy()
    })
})
