<script>
import axios from "axios"
import { store } from "./store.js"
import MainList from './components/MainList.vue'
import HeaderVue from './components/HeaderVue.vue'
import Search from './components/Search.vue'
export default {
  components: {
    MainList,
    HeaderVue,
    Search,
  },
  data() {
    return {
      store,
      showDiv: true,
    }
  },
  methods: {
    getApiMovie() {
      let api = `${store.apiMovie}?${store.apiKey}&page=1`
      if (store.searchInput !== "") {
        this.showDiv = false
        api = `https://api.themoviedb.org/3/search/movie?${store.apiKey}&query=${store.searchInput}`
      }
      axios
        .get(api)
        .then(res => {
          store.arrayCards = res.data.results;


        })
        .catch(err => {
          console.log("errori", err)
        });

      if (store.searchInput !== "") {
        this.showDiv = false
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

  },
  mounted() {
    this.getApiMovie()

  }
}
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <main>
    <Search @searchFunction="getApiMovie" />
    <div class="popular" v-if="showDiv">POPULAR</div>
    <div class="popular" v-if="!showDiv">BEST RESULTS</div>
    <MainList />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;

.popular {
  font-size: 30px;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
