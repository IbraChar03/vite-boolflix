<script>
import axios from "axios"
import { store } from "./store.js"
import MainList from './components/MainList.vue'
import HeaderVue from './components/HeaderVue.vue'
export default {
  components: {
    MainList,
    HeaderVue,

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApiMovie() {
      let api = `${store.apiMovie}?${store.apiKey}&page=1`
      if (store.searchInput !== "") {
        store.showDiv = false
        api = `https://api.themoviedb.org/3/search/movie?${store.apiKey}&query=${store.searchInput}`
      }
      axios
        .get(api)
        .then(res => {
          store.arrayCardsMovie = res.data.results;

        })
        .catch(err => {
          console.log("errori", err)
        });

    },
    getApiTv() {
      let api = `${store.apiTv}?${store.apiKey}&page=1`
      if (store.searchInput !== "") {
        store.showDiv = false
        api = `https://api.themoviedb.org/3/search/tv?${store.apiKey}&query=${store.searchInput}`
      }
      axios
        .get(api)
        .then(res => {
          store.arrayCardsTv = res.data.results;

        })
        .catch(err => {
          console.log("errori", err)
        });

    },

    getSearchResults() {
      this.getApiMovie();
      this.getApiTv();

    }

  },
  mounted() {
    this.getSearchResults()

  }
}
</script>

<template>
  <header>
    <HeaderVue @search="getSearchResults" />
  </header>

  <main>
    <MainList />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.text {
  font-size: 35px;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
