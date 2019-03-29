<template>

    <header class="header">
        <h1 class="header__title">{{titlePage}}</h1>
    </header>

</template>

<script>
export default {
    name: 'Header',
    props: ['titlePage']
}
</script>

<style lang="scss">
.header {
    height: 70px;
    line-height: 70px;
    margin-bottom: 40px;
    padding-left: 15px;
    color: $cor-branca;
    background-color: $cor-soc;

    &__title {
        margin: 0;
        padding: 0;
    }
}
</style>
