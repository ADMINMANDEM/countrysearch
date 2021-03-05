import Vue from 'vue'
import Router from "vue-router";
import CountryTable from "@/views/CountryTable";
import CountryDetails from "@/views/CountryDetails";

Vue.use(Router)

export default new Router({
  routes: [
      {
        path: '/',
        name: 'CountryTable',
        component: CountryTable
      },
      {
        path: '/country/:alpha3Code',
        name: 'CountryDetails',
        component: CountryDetails,
        props: true,
      }
  ],
  mode: 'history'
})
