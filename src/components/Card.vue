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
                <img :src="`${store.UrlImage}${item.poster_path}`" :alt=item.title>
                <div class="row title">
                    Title : {{ item.title }}
                </div>
                <div class="row title">
                    Original title : {{ item.original_title }}
                </div>

                <div class="row language" v-if="item.original_language !== `en` || item.original_language !== `ja`">
                    Language : <img :src="`https://countryflagsapi.com/png/${item.original_language}`"
                        :alt=item.original_language class="flag">
                </div>
                <div class="row language" v-else-if="item.original_language == `en`">
                    Language : <img src="/images/england.png" alt="en" class="flag">
                </div>
                <div class="row language" v-else-if="item.original_language == `ja`">
                    Language : <img src="/images/japan.png" alt="ja" class="flag">
                </div>

                <div class="row vote">

                    Vote: <font-awesome-icon icon="fa-solid fa-star " class="star"
                        v-for="item in Math.round(item.vote_average / 2)" />
                    <font-awesome-icon icon="fa-solid fa-star " class="star2"
                        v-for="item in 5 - (Math.round(item.vote_average / 2))" />

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
            width: calc(100% / 5);
            height: 200px;
            margin-top: 30px;
            margin-bottom: 150px;

            .star {
                color: yellow;
                font-size: 15px;

            }

            .star2 {
                color: #b2b2b2;
                font-size: 15px;
            }

            .row {
                max-width: 190px;
                margin-bottom: 3px;
            }

            .flag {
                width: 20px;
                height: 15px;
                vertical-align: middle;
            }

            img {
                height: 220px;
                width: 190px;
            }

        }
    }
}
</style>
