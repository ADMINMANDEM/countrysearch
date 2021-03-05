<template>
    <div class="country-info" :id="country.alpha3Code">
      <h2>Country: {{ country.name }}<img :src="country.flag" :alt="country.name" width="30" height="20"></h2>
      <h3>Domains: </h3>
      <ul>
        <li v-for="domain in country.topLevelDomain" v-bind:key="domain">
          {{ domain }}
        </li>
      </ul>
      <h3>Calling Codes: </h3>
      <ul>
        <li v-for="callingCode in country.callingCodes" v-bind:key="callingCode">
          {{ callingCode }}
        </li>
      </ul>
      <h3>Different spellings: </h3>
      <ul>
        <li v-for="spelling in country.altSpellings" v-bind:key="spelling">
          {{ spelling }}
        </li>
      </ul>
      <h3>Continent: {{ country.subregion }}</h3>
      <h3>Native Name: {{ country.nativeName }}</h3>
      <h3>Currencies: </h3>
      <ul>
        <li v-for="currency in country.currencies" v-bind:key="currency.name">
          {{ currency.name }} ( {{ currency.code }} / {{ currency.symbol }} )
        </li>
      </ul>
      <h3>Languages: </h3>
      <ul>
        <li v-for="languages in country.languages" v-bind:key="languages.name">
          {{ languages.name }}
        </li>
      </ul>
      <h3>On a Map:</h3>
      <p>
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
      </p>
      <h3>Bordering Countries: </h3>
      <ul v-if="country.borders.length">
        <li v-for="border in country.borders" v-bind:key="border">
          <a href="#" @click="clearSearch" v-scroll-to="{ el: '#' + border }">{{ border }} - ({{ countryLabel(border) }})</a>
        </li>
      </ul>
      <p v-else>This country is an island!</p>
      <br>
    </div>
</template>

<script>
import Vue from "vue";
import VueScrollTo from "vue-scrollto";
import CountryService from "@/services/CountryService";


Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease"
});

export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      countryByCode: [],
      center: {}
    }
  },
  methods: {
    clearSearch() {
      this.$emit('clear-search')
    },
    countryLabel (code) {
      function search(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].alpha3Code === nameKey) {
            return myArray[i].name;
          }
        }
      }
      return search(code, this.countryByCode)
    },
    smallCountryPin() {

    }
  },
  // mounted() {
  //   // At this point, the child GmapMap has been mounted, but
  //   // its map has not been initialized.
  //   // Therefore we need to write mapRef.$mapPromise.then(() => ...)
  //
  //   this.$refs.mapRef.$mapPromise.then((map) => {
  //     map.panTo({lat: 1.38, lng: 103.80})
  //   })
  // },
  created() {
    CountryService.getCountryByCode()
      .then(response => {
        this.countryByCode = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: bold;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
  margin: 40px 0 0;
}
</style>
