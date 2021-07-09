<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabber></MainTabber>
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
