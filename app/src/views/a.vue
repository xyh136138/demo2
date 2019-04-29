<template>
    <div>
        <h1>A页面</h1>
        <div>
            <router-link :to="{name:'/a/test1',params:{name:'666',age:20}}">test1</router-link>
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>