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
    Search
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApiMovie() {
      let api = `${store.apiMovie}?${store.apiKey}&page=1`
      if (store.searchInput !== "") {
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

    }
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
    <MainList />
  </main>
</template>

<style lang="scss">

</style>
