<script>
import MainList from './components/MainList.vue'
import HeaderVue from './components/HeaderVue.vue'
import Search from './components/Search.vue'
export default {
  components: {
    MainList,
    HeaderVue,
    Search
  }
}
</script>

<template>
  <header>
    <HeaderVue />
  </header>

  <main>
    <Search />
    <MainList />
  </main>
</template>

<style lang="scss">

</style>
