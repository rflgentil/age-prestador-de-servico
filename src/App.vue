<template>
    <md-app id="app" md-waterfall md-mode="flexible">
        <md-app-content>
            <router-view />
        </md-app-content>
    </md-app>
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
.md-app-container{
    overflow-x: hidden;
}
</style>
