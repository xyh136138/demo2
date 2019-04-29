<template>
  <div>
    <div id="app">
      <router-link to="/home">首页</router-link>
      <router-link to='/a'>a页面</router-link>
      <router-link to='/b'>b页面</router-link>
      <!-- <router-link :to="{name:'/a/]]',params:{name:'666',age:20}}">测试</router-link> -->
      <router-link to="test/test2">测试子路由2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
