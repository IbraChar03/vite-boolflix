<script >
import Card from './Card.vue'
import { store } from "../store.js"
export default {
  components: {
    Card
  },
  data() {
    return {
      store

    }
  }
}
</script>

<template>
  <Card :arrCards="store.arrayCards" />

</template>

<style lang="scss" scoped>

</style>
