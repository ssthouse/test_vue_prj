<template>
  <div>
    <p>Test mixed Vue usage:</p>
    <el-button @click="showAlert">Show Alert</el-button>
    <el-button @click="showMixMethod">Show MixMethod</el-button>
  </div>
</template>

<script>
  // 第一种外部声明的方式
  //  var getMethods = function () {
  //    return {
  //      showAlert: function () {
  //        console.log('alert from mixed')
  //      },
  //      showMixMethod: function () {
  //        console.log('alert from mixed')
  //      }
  //    }
  //  }

  // 第二种外部声明的方式
  var methods = {
    showAlert: function () {
      console.log('alert from mixed')
    },
    showMixMethod: function () {
      console.log('alert from mixed')
    }
  }

  export default{
    name: 'mix-usage',
    data () {
      return {}
    },
    props: [],
    methods: methods
  }
</script>

<style>

</style>
