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
  <section class="main">
    <div class="noresults" v-if="store.arrayCardsTv.length == 0 && store.arrayCardsMovie.length == 0">
      <p>No Results Found! Try Again</p>
    </div>

    <Card :arrCards="store.arrayCardsMovie" :arrCardsTv="store.arrayCardsTv" />
  </section>


</template>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 80px);
  width: 100%;
}

.noresults {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}
</style>
