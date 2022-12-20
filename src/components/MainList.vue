<script >
import CardMovie from './CardMovie.vue'
import CardTv from './CardTv.vue'
import { store } from "../store.js"
export default {
  components: {
    CardMovie,
    CardTv
  },
  data() {
    return {
      store

    }
  }
}
</script>

<template>
  <section class="mainpart">
    <section class="main">

      <div class="noresults" v-if="store.arrayCardsTv.length == 0 && store.arrayCardsMovie.length == 0">
        <p>No Results Found! Try Again</p>
      </div>

      <div class="container">

        <div class="text" v-if="store.showDiv">
          <p>POPULAR MOVIES</p>
        </div>

        <div class="text" v-if="!store.arrayCardsMovie.length == 0 && !store.showDiv">
          <p>MOVIES</p>
        </div>

        <div class="cont-cards">
          <CardMovie v-for="items in store.arrayCardsMovie" :item="items" />
        </div>


        <div class="text" v-if="store.showDiv">
          <p>POPULAR TV SERIES</p>
        </div>

        <div class="text" v-if="!store.arrayCardsTv.length == 0 && !store.showDiv">
          <p>TV SERIES</p>
        </div>

        <div class="cont-cards">
          <CardTv v-for="items in store.arrayCardsTv" :item="items" />
        </div>
      </div>
    </section>
  </section>


</template>

<style lang="scss" scoped>
.mainpart {
  height: calc(100vh - 80px);
  width: 100%;

  .main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      width: 90%;
      height: 100%;

      .text {
        font-size: 30px;
        color: white;
        display: flex;
        justify-content: start;
        align-items: center;
        font-weight: bold;
        text-align: center;
        // margin-top: 30px;
        padding-top: 30px;
      }

      .cont-cards {
        width: 100%;
        height: 320px;
        display: flex;
        // justify-content: start;
        overflow: hidden;
        overflow-x: auto;
        white-space: nowrap;

        ::-webkit-scrollbar {
          width: 12px;
          /* for vertical scrollbars */
          height: 12px;
          /* for horizontal scrollbars */
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
        }

      }
    }
  }
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
