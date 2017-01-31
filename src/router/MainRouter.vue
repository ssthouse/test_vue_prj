<template>
  <div>
    <!--匹配路由的组件将显示在这里-->
    <!--<router-link to="/main/item_one">To item one</router-link>-->
    <!--<router-link to="/main/item_two">To item two</router-link>-->
    <p>I am mainRouter: {{$route.params.id}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    name: 'router-components',
    data () {
      return {}
    },
    props: []
  }
</script>

<style>

</style>
