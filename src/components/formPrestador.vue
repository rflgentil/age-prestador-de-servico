<template>
    <div class="form-prestador">
        <Header :titlePage='$route.params.id ? "Editar Prestador de Serviço" : "Novo Prestador de Serviço"' />

        <md-content>
            <form novalidate class="md-layout md-alignment-center" @submit.prevent="validateUser">
                <md-card class="md-layout-item md-size-95 md-small-size-100">
                    <md-card-header>
                        <div class="md-title">Dados do Prestador</div>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('nome')">
                                    <label for="nome">Nome</label>
                                    <md-input name="nome" id="nome" v-model="form.nome" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.nome.required">Nome é obrigatório</span>
                                    <span class="md-error" v-else-if="!$v.form.nome.minlength">Preencha um nome válido</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('email')">
                                    <label for="email">E-mail</label>
                                    <md-input name="email" id="email" v-model="form.email" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.email.required">E-mail é obrigatório</span>
                                    <span class="md-error" v-else-if="!$v.form.email.minlength">Preencha um e-mail válido</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('documento')">
                                    <label for="documento">CPF/CNPJ</label>
                                    <md-input name="documento" id="documento" v-model="form.documento" v-mask="['###.###.###-##', '##.###.###/####-##']" :disabled="sending" @keyup="handleTypeDocument" />
                                    <span class="md-error" v-if="!$v.form.documento.required">CPF/CNPJ é obrigatório</span>
                                    <span class="md-error" v-else-if="!$v.form.documento.validDocument">Preencha um CPF/CNPJ válido</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100" v-show="typeDocument == 'cnpj'">
                                <md-field :class="getValidationClass('razaoSocial')">
                                    <label for="razaoSocial">Razão Social</label>
                                    <md-input name="razaoSocial" id="razaoSocial" v-model="form.razaoSocial" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.razaoSocial.required">Razão Social é obrigatório</span>
                                </md-field>
                            </div>

                        </div>
                    </md-card-content>

                    <md-card-header>
                        <div class="md-title">Endereço do Prestador</div>
                    </md-card-header>

                    <md-card-content>
                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-large-size-25 md-small-size-100">
                                <md-field :class="getValidationClass('cep')">
                                    <label for="cep">CEP</label>
                                    <md-input name="cep" id="cep" v-model="form.cep" v-mask="'#####-###'" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.cep.required">CEP é obrigatório</span>
                                </md-field>
                            </div>
                        </div>

                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('endereco')">
                                    <label for="endereco">Endereço</label>
                                    <md-input name="endereco" id="endereco" v-model="form.endereco" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.endereco.required">Endereço é obrigatório</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('numero')">
                                    <label for="numero">Número</label>
                                    <md-input type="number" name="numero" id="numero" v-model="form.numero" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.numero.required">Número é obrigatório</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('complemento')">
                                    <label for="complemento">Complemento</label>
                                    <md-input name="complemento" id="complemento" v-model="form.complemento" :disabled="sending" />
                                </md-field>
                            </div>

                            <div class="md-layout-item md-small-size-100">
                                <md-field :class="getValidationClass('bairro')">
                                    <label for="bairro">Bairro</label>
                                    <md-input name="bairro" id="bairro" v-model="form.bairro" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.bairro.required">Bairro é obrigatório</span>
                                </md-field>
                            </div>
                        </div>

                        <div class="md-layout md-gutter">
                            <div class="md-layout-item md-large-size-25 md-small-size-100">
                                <md-field :class="getValidationClass('cidade')">
                                    <label for="cidade">Cidade</label>
                                    <md-input name="cidade" id="cidade" v-model="form.cidade" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.cidade.required">Cidade é obrigatório</span>
                                </md-field>
                            </div>

                            <div class="md-layout-item md-large-size-25 md-small-size-100">
                                <md-field :class="getValidationClass('estado')">
                                    <label for="estado">Estado</label>
                                    <md-input name="estado" id="estado" v-model="form.estado" :disabled="sending" />
                                    <span class="md-error" v-if="!$v.form.estado.required">Estado é obrigatório</span>
                                </md-field>
                            </div>
                        </div>
                    </md-card-content>

                    <md-card-actions class="form-prestador__box-btns">
                        <md-button @click.native="$router.push('/')">Cancelar</md-button>
                        <md-button type="submit" class="md-dense md-raised md-primary" :disabled="sending">Salvar</md-button>
                    </md-card-actions>
                </md-card>
            </form>
        </md-content>

        <md-dialog :md-active.sync="showDialogPost">
            <md-dialog-title>{{messagePost}}</md-dialog-title>

            <md-dialog-actions>
                <md-button class="md-raised md-primary" @click="handlePostPrestador">OK</md-button>
            </md-dialog-actions>
        </md-dialog>

        <md-dialog-alert
            :md-active.sync="errorDialog"
            md-title="OPS! Aconteceu um erro inesperado"
            md-content="Por favor, tente novamente mais tarde."
            class="md-dialog--error" />
    </div>
</template>

<script>
import Header from '@/components/header'
import Prestadores from '@/services/prestadores'
import { mask } from 'vue-the-mask'
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import { validCPF, validaCNPJ, verificaCpfCnpj } from '@/helpers/helpers'

// Verifica se valor digitado no campo de documento é um CPF ou CNPJ e aplica validação especifica.
const handeValidDocument = value => verificaCpfCnpj(value) === 'cpf' ? validCPF(value) : validaCNPJ(value)

export default {
    name: 'FormPrestador',
    directives: { mask },
    mixins: [validationMixin],
    components: {
        Header
    },
    data () {
        return {
            dataPrestador: '',
            errorDialog: false,
            messagePost: '',
            showDialogPost: false,
            typeDocument: '',
            form: {
                nome: null,
                email: null,
                razaoSocial: null,
                documento: null,
                cep: null,
                endereco: null,
                numero: null,
                complemento: null,
                bairro: null,
                cidade: null,
                estado: null
            },
            userSaved: false,
            sending: false
        }
    },

    validations: {
        form: {
            nome: { required, minLength: minLength(3) },
            email: { required, email },
            razaoSocial: { required },
            documento: { required, handeValidDocument },
            cep: { required },
            endereco: { required },
            numero: { required },
            bairro: { required },
            cidade: { required },
            estado: { required }
        }
    },

    created () {
        if (!this.$route.params.id) return false

        Prestadores.getPrestador(this.$route.params.id).then(response => {
            this.dataPrestador = response.data

            this.form.nome = this.dataPrestador.nome
            this.form.email = this.dataPrestador.email
            this.form.documento = this.dataPrestador.documento
            this.form.razaoSocial = this.dataPrestador.razaoSocial
            this.form.cep = this.dataPrestador.cep
            this.form.endereco = this.dataPrestador.endereco
            this.form.numero = this.dataPrestador.numero
            this.form.complemento = this.dataPrestador.complemento
            this.form.bairro = this.dataPrestador.bairro
            this.form.cidade = this.dataPrestador.cidade
            this.form.estado = this.dataPrestador.estado

            this.typeDocument = this.form.documento.length > 14 ? 'cnpj' : 'cpf'
        }).catch(() => {
            this.errorDialog = true
        })
    },

    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]

            if (field) {
                return {
                    'md-invalid': field.$invalid && field.$dirty
                }
            }
        },

        clearForm () {
            this.$v.$reset()
            this.form.nome = null
            this.form.email = null
            this.form.documento = null
            this.form.razaoSocial = null
            this.form.cep = null
            this.form.endereco = null
            this.form.numero = null
            this.form.complemento = null
            this.form.bairro = null
            this.form.cidade = null
            this.form.estado = null
        },

        savePrestador () {
            this.sending = true
            const responseForm = typeAction => {
                this.messagePost = typeAction === 'edit' ? 'Prestador alterado com sucesso' : 'Prestador cadastrado com sucesso'

                this.userSaved = true
                this.sending = false
                this.showDialogPost = true
            }

            if (this.$route.params.id) {
                Prestadores.editPrestador(this.$route.params.id, this.form).then(response => {
                    responseForm('edit')
                }).catch(() => {
                    this.errorDialog = true
                })
            } else {
                Prestadores.savePrestador(this.form).then(response => {
                    responseForm('save')
                }).catch(() => {
                    this.errorDialog = true
                })
            }
        },

        validateUser () {
            this.$v.$touch()
            if (!this.$v.$invalid) this.savePrestador()
        },

        handlePostPrestador () {
            this.showDialogPost = false
            this.clearForm()
            history.go(-1)
        },

        handleTypeDocument () {
            this.typeDocument = verificaCpfCnpj(this.form.documento)

            if (this.typeDocument === 'cpf') this.form.razaoSocial = ' '
        }
    }
}
</script>

<style lang="scss">
.form-prestador {
    &__box-btns {
        padding: 0 25px 25px;
    }
}
</style>
