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
  <Card :arrCardsTv="store.arrayCardsTv" />

</template>

<style lang="scss" scoped>

</style>
