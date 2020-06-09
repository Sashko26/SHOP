<template>
  <div class="apple-main-wrapper">
    <apple-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import appleHeader from './layouts/apple-header'

  export default {
    name: 'apple-main-wrapper',
    components: {
      appleHeader
    },
    props: {},
    data() {
      return {
        title: 'Main wrapper'
      }
    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>

<style>
  .apple-main-wrapper {
    margin: 0 auto;
  }
</style>
