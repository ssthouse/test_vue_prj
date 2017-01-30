<template>
  <div>
    <el-button>{{message}}</el-button>
  </div>
</template>

<script>
  export default{
    name: 'props-item',
    data () {
      return {}
    },
    props: ['message']
  }
</script>
