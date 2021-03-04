<template>
  <div class="panel panel-default">
    <div class="panel-heading" style="font-weight:bold"><span class="glyphicon glyphicon-align-justify"></span> All Countries</div>
    <div class="row">
        <div class="search-wrapper panel-heading col-sm-12">
          <label>
            <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
          </label>
        </div>
    </div>
      <CountryInfo v-for="country in filteredResources" :key="country" :country="country" @clear-search="clearSearch"></CountryInfo>
    </div>
</template>

<script>
import CountryService from "@/services/CountryService";
import CountryInfo from "@/components/CountryInfo";

export default {
  name: 'App',
  components: {CountryInfo},
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
      countries: null
    }
  },
  computed: {
    filteredResources (){
      if(this.searchQuery) {
        return this.countries.filter((country) => {
          const contains = (v) => country.name.toLowerCase().includes(v) || country.altSpellings.toString().toLowerCase().includes(v)
          return this.searchQuery.toLowerCase().split(' ').every(contains)
        })
      }else{
        return this.countries;
      }
    }
  } ,
  created() {
    CountryService.getCountries()
      .then(response => {
        this.countries = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    clearSearch() {
      this.searchQuery = ''
    }
  }
}
</script>

<style>

</style>
