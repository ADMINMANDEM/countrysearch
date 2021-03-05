<template>

  <div v-if="country">
    <router-link
        :to="{ name: 'CountryTable'}"
      >
        <vue-fab
          icon="keyboard_backspace"
        ></vue-fab>
      </router-link>
    <span class="md-title">{{ country.name }}</span>
    <br>
    <br>
    <img :src="country.flag" :alt="country.name" width="150" height="100">
    <p><b>Population:</b> {{ formatNumber(country.population) }}</p>
    <p><b>Capital:</b> {{ country.capital }}</p>
    <GmapMap
        :center="{lat: country.latlng[0], lng: country.latlng[1]}"
        :zoom="4"
        map-type-id="roadmap"
        style="width: 1000px; height: 500px; margin: 0 auto"
      >
        <GmapMarker
          v-if="country.area <= 100000"
          :position="{lat: country.latlng[0], lng: country.latlng[1]}"
        />
      </GmapMap>
  </div>
</template>

<script>
import CountryService from "@/services/CountryService";
export default {
  props: ['alpha3Code'],
  data() {
    return {
      country: null
    }
  },
  methods: {
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  },
  created() {
    CountryService.getCountry(this.alpha3Code)
      .then(response => {
        this.country = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
