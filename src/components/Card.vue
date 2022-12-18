<script >
import { store } from "../store.js"
export default {
    props: {
        arrCards: Array,
        arrCardsTv: Array
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <section class="main">
        <div class="container">
            <div class="text" v-if="store.showDiv">
                <p>POPULAR MOVIES</p>
            </div>
            <div class="text" v-if="!store.arrayCardsMovie.length == 0 && !store.showDiv">
                <p>MOVIES</p>
            </div>
            <div class="cont-cards">


                <div class="card" v-for="(item, index) in arrCards" :key="item.id">
                    <img :src="`${store.UrlImage}${item.poster_path}`" :alt=item.title
                        onerror="this.src='/images/notfound.webp';">
                    <div class="cont-text">

                        <div class="row title">
                            Title : {{ item.title }}
                        </div>
                        <div class="row title" v-if="item.title !== item.original_title">
                            Original title : {{ item.original_title }}
                        </div>
                        <div class="row language"
                            v-if="item.original_language !== `en` && item.original_language !== `ja`">
                            Language : <img :src="`https://countryflagsapi.com/png/${item.original_language}`"
                                :alt=item.original_language class="flag" onerror="this.src='/images/missing.png';">
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
            </div>
            <div class="text" v-if="store.showDiv">
                <p>POPULAR TV SERIES</p>
            </div>
            <div class="text" v-if="!store.arrayCardsTv.length == 0 && !store.showDiv">
                <p>TV SERIES</p>
            </div>
            <div class="cont-cards">



                <div class="card" v-for="(item, index) in arrCardsTv" :key="item.id">
                    <img :src="`${store.UrlImage}${item.poster_path}`" :alt=item.name
                        onerror="this.src='/images/notfound.webp';">
                    <div class="cont-text">

                        <div class="row title">
                            Title : {{ item.name }}
                        </div>
                        <div class="row title" v-if="item.name !== item.original_name">
                            Original title : {{ item.original_name }}
                        </div>
                        <div class="row language"
                            v-if="item.original_language !== `en` && item.original_language !== `ja`">
                            Language : <img :src="`https://countryflagsapi.com/png/${item.original_language}`"
                                :alt=item.original_language class="flag" onerror="this.src='/images/missing.png';">
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
        width: 90%;
        height: 100%;

        p {
            width: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
            margin-left: 8px;

        }

        .text {
            font-size: 30px;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            text-align: center;
            margin-top: 30px;
        }

        .cont-cards {
            width: 100%;
            height: 310px;
            display: flex;
            // justify-content: start;
            overflow: hidden;
            overflow-x: auto;
            white-space: nowrap;
        }


        .card {
            width: 200px;
            margin: 10px;
            height: 260px;
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
                padding-top: 70px;
                padding-left: 10px;
                padding-right: 10px;
                text-align: center;
                white-space: pre-wrap;

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
                font-size: 15px;
                display: flex;
                justify-content: center;
                // align-items: center;
                white-space: pre-wrap
            }

            .flag {
                width: 20px;
                height: 15px;
                vertical-align: middle;
                margin-left: 5px;
            }

            img {
                height: 260px;
                width: 200px;

            }



        }

        .card:hover .cont-text {
            display: block;
            cursor: pointer;
        }

    }
}
</style>
