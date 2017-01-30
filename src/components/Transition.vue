<template>
  <div>
    <transition name="fade">
      <p v-if="isTrue">有动画效果吗?</p>
    </transition>
    <el-button v-on:click="changeBoolean">change boolean</el-button>
    <br><br>

    <transition appear>
      <p v-if="isAppearWorks">Appear 有用吗?</p>
    </transition>
    <el-button v-on:click="changeAppearElement">toggle Appear element</el-button>
  </div>
</template>

<script>
  export default{
    name: 'transition-item',
    data () {
      return {
        isTrue: true,
        isAppearWorks: true
      }
    },
    props: [],
    methods: {
      changeBoolean: function () {
        this.isTrue = !this.isTrue
      },
      changeAppearElement: function () {
        this.isAppearWorks = !this.isAppearWorks
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
