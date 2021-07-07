<template>
  <div id="app">
    <MainTabber></MainTabber>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabber from 'components/content/mainTabber/MainTabber.vue'
export default {
  name: 'App',
  components: {
    MainTabber
  }
}
</script>

<style>
</style>
