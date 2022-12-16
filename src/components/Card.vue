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
    },
    methods: {

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
                    Language : <img :src="`https://countryflagsapi.com/png/${item.original_language}`" alt=""
                        class="flag">
                </div>
                <div class="row language" v-if="item.original_language == `en`">
                    Language : <img src="/images/england.png" alt="" class="flag">
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
        flex-wrap: wrap;

        .card {
            width: calc(100% / 6 - 10px);
            margin: 5px;
            height: 200px;
            margin-top: 30px;
            margin-bottom: 150px;

            .row {
                max-width: 135px;
                margin-bottom: 3px;
            }

            .flag {
                width: 20px;
                height: 15px;
                vertical-align: middle;
            }

            img {
                height: 200px;
            }

        }
    }
}
</style>
