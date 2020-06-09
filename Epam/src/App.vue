<template>
  <div id="app">
    <apple-main-wrapper />
  </div>
</template>

<script>
  import appleMainWrapper from './components/apple-main-wrapper'
  import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    appleMainWrapper
  },
  computed: {
    ...mapGetters([
  ])
  },
  methods: {
    ...mapActions([
      ]),
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}
</style>
