<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'establishSocketConnection'
    ])
  },
  created () {
    this.$store.dispatch('establishSocketConnection')
  }
}
</script>

<style lang="scss">
@import './sass/base/base';
@import './sass/base/typography';
</style>
