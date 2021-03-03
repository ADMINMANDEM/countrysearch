<template>
  <div id="app">
    <h1 id="top">Here are all the countries:</h1>
    <vue-fab mainBtnColor="#3599DB"
    v-scroll-to="{ el: '#top' }"
    icon="expand_less">
    </vue-fab>
    <CountryTable country></CountryTable>
  </div>
</template>

<script>
// import CountryInfo from "@/components/CountryInfo"
import CountryTable from "@/components/CountryTable";
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease"
});

export default {
  name: 'App',
  components: {
    // CountryInfo,
    CountryTable
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
