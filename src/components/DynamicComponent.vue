<template>
  <div>
    <keep-alive>
      <component v-bind:is="componentName"></component>
    </keep-alive>
    <input v-model="num" type="number">
  </div>
</template>

<script>
  import Vue from 'vue'

  Vue.component('item-one', {
    template: '<div>itemOne</div>',
    data: function () {
      return {}
    }
  })

  Vue.component('item-two', {
    template: '<div>itemTwo<div>',
    data: function () {
      return {}
    }
  })

  Vue.component('item-three', {
    template: '<div>itemThree<div>',
    data: function () {
      return {}
    }
  })

  export default{
    name: '',
    data () {
      return {
        num: 10
      }
    },
    computed: {
      componentName: function () {
        if (this.num < 10) {
          return 'item-one'
        } else if (this.num < 20) {
          return 'item-two'
        } else {
          return 'item-three'
        }
      }
    },
    props: []
  }
</script>

<style>

</style>
