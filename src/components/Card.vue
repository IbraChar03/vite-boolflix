<script >
import { store } from "../store.js"
export default {
    props: {
        arrCards: Array
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
        <div class="container">
            <div class="card" v-for="(item, index) in arrCards" :key="item.id">
                <img :src="`${store.UrlImage}${item.poster_path}`" alt="">
                <div class="row title">
                    Title : {{ item.title }}
                </div>
                <div class="row title">
                    Original title : {{ item.original_title }}
                </div>
                <div class="row language">
                    Language : {{ item.original_language }}
                </div>
                <div class="row vote">
                    Vote average : {{ item.vote_average }}
                </div>


            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: center;

        .card {
            width: calc(100% / 4 - 10px);
            margin: 5px;
            height: 300px;

        }
    }
}
</style>
