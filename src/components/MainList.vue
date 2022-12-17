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
  <div class="noresults" v-if="store.arrayCardsTv.length == 0 && store.arrayCardsMovie.length == 0">
    <p>No Results Found! Try Again</p>
  </div>
  <div class="text">
    <p v-if="!store.arrayCardsMovie.length == 0">MOVIES</p>
  </div>
  <Card :arrCards="store.arrayCardsMovie" />
  <div class="text">
    <p v-if="!store.arrayCardsTv.length == 0">TV SERIES</p>
  </div>
  <Card :arrCardsTv="store.arrayCardsTv" />

</template>

<style lang="scss" scoped>
p {
  width: 65%;
  display: flex;
  justify-content: start;
  align-items: center;
}

.text {
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
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
