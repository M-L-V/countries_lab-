import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      filterSearch: "",
    },
    mounted(){
      this.fetchCountry();
    },

    computed: {
        displayTotalPopulation: function(){
          return this.countries.reduce((total, country) => total + country.population, 0);
        },

        findCountry: function(){
          return this.countries.filter((country) => {
          return (country.name === this.filterSearch ? country : "");
        })
      }
    },

      methods: {
      fetchCountry: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = (data))
      }

    }

  })

});
