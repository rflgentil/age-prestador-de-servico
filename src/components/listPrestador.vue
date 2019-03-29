<template>
    <div class="list-prestador">
        <Header titlePage="Prestadores de Serviço" />

        <div class="list-prestador__list md-layout md-gutter md-alignment-center">
            <div class="list-prestador__list-btn-novo md-layout-item md-large-size-95">
                <md-button
                    @click.native="$router.push('/FormPrestador')"
                    class="md-dense md-raised md-primary">Novo Prestador</md-button>
            </div>

            <md-table class="md-layout-item md-large-size-95">
                <md-table-row class="list-prestador__list-header">
                    <md-table-head>Nome</md-table-head>
                    <md-table-head>E-mail</md-table-head>
                    <md-table-head>Documento</md-table-head>
                    <md-table-head>Endereço</md-table-head>
                    <md-table-head class="list-prestador__list-cel-acoes"></md-table-head>
                </md-table-row>
                <md-table-row v-for="prestador in dataPrestadores" :key="prestador.id">
                    <md-table-cell>{{prestador.nome}}</md-table-cell>
                    <md-table-cell>{{prestador.email}}</md-table-cell>
                    <md-table-cell>{{prestador.documento}}</md-table-cell>
                    <md-table-cell>{{prestador.endereco}}</md-table-cell>
                    <md-table-cell>
                        <md-button
                            class="md-icon-button md-raised"
                            @click.native="$router.push(`/FormPrestador/${prestador.id}`)">
                            <md-icon>edit</md-icon>
                            <md-tooltip md-direction="top">Editar</md-tooltip>
                        </md-button>

                        <md-button
                            class="md-icon-button md-raised md-accent"
                            v-on:click="handleModalExcluir(prestador.id)">
                            <md-icon>delete</md-icon>
                            <md-tooltip md-direction="top">Apagar</md-tooltip>
                        </md-button>
                    </md-table-cell>
                </md-table-row>
            </md-table>

            <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Deseja excluir prestador</md-dialog-title>

                <md-dialog-actions>
                    <md-button @click="showDialog = false">Cancelar</md-button>
                    <md-button class="md-raised md-accent" @click="handleDeletePrestador">Excluir</md-button>
                </md-dialog-actions>
            </md-dialog>
        </div>
    </div>

</template>

<script>
import Header from '@/components/header'
import Prestadores from '@/services/prestadores'

export default {
    name: 'ListPrestador',
    components: {
        Header
    },
    data () {
        return {
            menuVisible: false,
            activePrestador: '',
            showDialog: false,
            dataPrestadores: ''
        }
    },

    created () {
        Prestadores.getAllPrestadores().then(response => (this.dataPrestadores = response.data))
    },

    methods: {
        handleModalExcluir: function (id) {
            this.activePrestador = id
            this.showDialog = true
        },

        handleDeletePrestador: function () {
            Prestadores.deletePrestador(this.activePrestador).then(response => {
                this.showDialog = false

                // Atualiza grid na view sem o user excluido.
                this.dataPrestadores = this.dataPrestadores.filter(value => value.id !== this.activePrestador)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.list-prestador {
    &__list {
        margin-bottom: 50px;

        &-header {
            background-color: #ececec;
        }

        &-btn-novo {
            margin-bottom: 15px;
            text-align: right;
        }

        &-cel-acoes {width: 160px;}
    }
}

.md-dialog {
    text-align: center;
    border-top: 5px solid $cor-soc;
}

.md-dialog-actions {
    padding-bottom: 25px;
    justify-content: center;
}
</style>
