<script >
import { store } from "../store.js"
export default {
    data() {
        return {
            active: 0,
            store,
            links: [
                {
                    name: "Home",
                    href: '#'
                },
                {
                    name: "Series",
                    href: '#'
                },
                {
                    name: "Films",
                    href: '#'
                },
                {
                    name: "Recently Added",
                    href: '#'
                },
                {
                    name: "My List",
                    href: '#'
                },
            ]
        }
    },
    methods: {
        activeLink(index) {
            this.active = index

        },
        svuota() {
            store.arrayMovieId.length = 0;
        },
        displayInput() {
            let inp = document.querySelector("input")
            inp.style.display = "flex"

        }
    }
}
</script>

<template>
    <section class="header">
        <div class="cont">
            <div class="links">
                <img src="/images/netflix.png" alt="netflix">
                <ul>
                    <li v-for="(item, index) in links" :key="index">
                        <a :href=item.href @click="activeLink(index)" :class="active == index ? `active` : ``">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="search">
                <div class="inp">
                    <input type="text" v-model="store.searchInput">
                    <button @click="displayInput()">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon"
                            @click="$emit(`search`), svuota()" />
                    </button>
                </div>

                <font-awesome-icon icon="fa-solid fa-bell" class="bell" />
                <div class="profile">
                    <img src="/images/profilepicture.png" alt="" class="imgprofile">
                    <font-awesome-icon icon="fa-solid fa-sort-down" class="angle" />

                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 80px;
    background-color: #030303;
    display: flex;
    justify-content: center;
    align-items: center;

    .cont {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .links {
            display: flex;

            ul {
                width: 400px;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                li {
                    list-style: none;

                    a {
                        text-decoration: none;
                        color: #bfbfbf;
                        font-size: 16px;
                    }
                }
            }

            img {
                width: 150px;
                height: 70px;
            }

            .active {
                color: white;
                height: 1px;
                position: relative;
                width: 40%;
                border-bottom: 3px solid red;
            }
        }

        .search {
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            .inp {
                display: flex;
            }

            .profile {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;


                .imgprofile {
                    height: 40px;
                    width: 40px;
                    cursor: pointer;

                }

                .angle {
                    font-size: 15px;
                    color: white;
                    margin-left: 10px;
                    cursor: pointer;
                    padding-bottom: 5px;

                }
            }



            .bell {
                color: white;
                font-size: 20px;
                margin: 0px 15px;
                cursor: pointer;
            }

            input {
                display: none;
                color: white;
                padding: 6px;
                background-color: black;
                border-radius: 5px;
                border: 1px solid white;
                outline: none;
            }

            button {
                padding: 5px 8px;
                background-color: black;
                border-radius: 5px;
                cursor: pointer;
                // border: 1px solid white;

                .icon {
                    font-size: 20px;
                    color: white;
                }

            }

            button:hover {
                border: 1px solid white;
            }
        }

    }
}
</style>
