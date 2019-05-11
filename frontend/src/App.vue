<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    overflow-y: auto;
  }

  .project-description {
    margin: 30px 0;
    display: inline-block;
    font-family: 'Comfortaa', cursive;
    font-size: 18px;
  }
</style>
