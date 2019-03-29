<template>

    <header class="header">
        <h1>{{titlePage}}</h1>
    </header>

</template>

<script>
export default {
    name: 'Header',
    props: ['titlePage'],
    data () {
        return {
            meses: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        }
    },
    computed: {
        mesAtual () {
            let dateNow = new Date()

            return `${this.meses[dateNow.getMonth()]}/${dateNow.getFullYear()}`
        },
        dataAtual () {
            let dateNow = new Date()
            let mesNow = dateNow.getMonth()
            let mesAtual = mesNow < 10 ? `0${mesNow}` : mesNow

            return `${dateNow.getDate()}/${mesAtual}`
        },
        horaAtual () {
            let dateNow = new Date()
            let horaNow = dateNow.getHours()
            let minutosNow = dateNow.getMinutes()
            let horaAtual = horaNow < 10 ? `0${horaNow}` : horaNow
            let minutosAtual = minutosNow < 10 ? `0${minutosNow}` : minutosNow

            return `${horaAtual}:${minutosAtual}`
        }
    }
}
</script>

<style lang="scss">
$height-header: 111px;

.header {
    height: $height-header;
}
</style>
