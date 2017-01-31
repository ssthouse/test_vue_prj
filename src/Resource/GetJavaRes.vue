<template>
  <div>
    <el-button @click="getData"></el-button>
  </div>
</template>

<script>
  export default{
    name: 'get-data-item',
    data () {
      return {}
    },
    props: [],
    methods: {
      getData: function () {
        this.$http.get('http://127.0.0.1:8081/user/ssthouse').then(response => {
          let userinfo = response.body
          console.log(userinfo.username)
          console.log(userinfo.age)
        })
      }
    }
  }
</script>

<style>

</style>
