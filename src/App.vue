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
      let api = store.apiMovie
      if (store.searchInput !== "") {
        api += `?${store.apiKeyapiKey}&query=${store.searchInput}`
      }



      axios
        .get(store.apiMovie)
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
