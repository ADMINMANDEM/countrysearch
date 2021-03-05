<template>
  <div id="app">
    <span id="top" class="md-headline">Country Search</span>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}


</script>

<style>
#app {
  font-family: Roboto,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
