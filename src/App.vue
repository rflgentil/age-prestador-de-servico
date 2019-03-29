<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            menuVisible: false
        }
    }
}
</script>

<style lang="scss">
.md-content {
    padding: 0;
}
.md-app-container{
    overflow-x: hidden;
}
</style>
