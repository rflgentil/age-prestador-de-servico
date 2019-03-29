<template>

    <md-toolbar class="header md-primary">
        <h1 class="md-title">{{titlePage}}</h1>
    </md-toolbar>

</template>

<script>
export default {
    name: 'Header',
    props: ['titlePage']
}
</script>

<style lang="scss">
.header {
    margin-bottom: 50px;
}
</style>
