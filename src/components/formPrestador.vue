<template>
    <div class="form-prestador">
        <Header :titlePage='!!!$route.params.id ? "Novo Prestador de Serviço" : "Editar Prestador de Serviço"' />

        <md-content>
            Prestador {{ $route.params.id }}
        </md-content>
    </div>
</template>

<script>
import Header from '@/components/header'
import Prestadores from '@/services/prestadores'

export default {
    name: 'FormPrestador',
    components: {
        Header
    },
    data () {
        return {
            dataPrestador: ''
        }
    },

    created () {
        if(!!!this.$route.params.id) return false;

        Prestadores.getPrestador(this.$route.params.id).then(response => (this.dataPrestador = response.data))
    }
}
</script>

<style lang="scss">
.form-prestador {

}
</style>
