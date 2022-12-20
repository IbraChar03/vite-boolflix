<script >
import axios from "axios"
import { store } from "../store.js"
export default {
    props: {
        item: Object,
    },
    data() {
        return {
            store,
            itemid: this.item.id
        }
    },
    methods: {
        getMovieCast() {
            axios
                .get(`https://api.themoviedb.org/3/movie/${this.itemid}/credits?${store.apiKey}`)
                .then(res => {
                    for (let index = 0; index < 5; index++) {
                        store.arrayMovieCast.push(res.data.cast[index].name)
                    }

                })
                .catch(err => {
                    console.log(err);
                })

        },

        resetMovieCast() {
            store.arrayMovieCast = [];
        },
    },


}

</script>

<template>

    <div class="card" @mouseenter="resetMovieCast">
        <img :src="`${store.UrlImage}${item.poster_path}`" :alt=item.title onerror="this.src='/images/notfound.webp';">

        <div class="cont-text">

            <div class="row title">
                Title : {{ item.title }}
            </div>
            <div class="row title" v-if="item.title !== item.original_title">
                Original title : {{ item.original_title }}
            </div>
            <div class="row language" v-if="item.original_language !== `en` && item.original_language !== `ja`">
                Language : <img :src="`https://countryflagsapi.com/png/${item.original_language}`"
                    :alt=item.original_language class="flag" onerror="this.src='/images/missing.png';"
                    crossorigin="anonymous">
            </div>
            <div class="row language" v-else-if="item.original_language == `en`">
                Language : <img src="/images/england.png" alt="en" class="flag">
            </div>
            <div class="row language" v-else-if="item.original_language == `ja`">
                Language: <img src="/images/japan.png" alt="ja" class="flag">
            </div>

            <div class="row vote">

                Vote : <font-awesome-icon icon="fa-solid fa-star " class="star"
                    v-for="item in Math.round(item.vote_average / 2)" />
                <font-awesome-icon icon="fa-solid fa-star " class="star2"
                    v-for="item in 5 - (Math.round(item.vote_average / 2))" />

            </div>
            <div class="row title" v-if="item.overview !== ``">
                Overview : {{ item.overview }}
            </div>
            <div class="cast title" @click="getMovieCast()">
                Click here for the cast
                <div v-for="item in store.arrayMovieCast">
                    {{ item }}

                </div>



            </div>

        </div>

    </div>

</template>

<style lang="scss" scoped>
.card {
    width: 200px;
    margin: 5px;
    height: 270px;
    margin-top: 20px;
    margin-bottom: 30px;
    position: relative;


    .cont-text {
        display: none;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.8);
        // padding-top: 70px;
        padding: 20px 0px;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        white-space: pre-wrap;
        overflow-y: auto;


    }

    .star {
        color: yellow;
        font-size: 15px;

    }

    .star2 {
        color: #b2b2b2;
        font-size: 15px;
    }

    .row {
        margin-bottom: 5px;
        font-weight: bold;
        color: white;
        font-size: 14px;
        display: flex;
        justify-content: center;
        // align-items: center;
        white-space: pre-wrap
    }

    .cast {
        margin-bottom: 5px;
        font-weight: bold;
        color: white;
        font-size: 14px;
        // align-items: center;
        white-space: pre-wrap
    }

    .none {
        display: none;
    }

    .flag {
        width: 20px;
        height: 15px;
        vertical-align: middle;
        margin-left: 5px;
    }

    img {
        height: 270px;
        width: 200px;

    }

}

.card:hover .cont-text {
    display: block;
    cursor: pointer;
}
</style>
