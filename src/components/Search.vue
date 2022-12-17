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
                <div>
                    <input type="text" v-model="store.searchInput">
                    <button>
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon" @click="$emit(`search`)" />
                    </button>
                </div>

                <font-awesome-icon icon="fa-solid fa-bell" class="bell" />
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
    margin-bottom: 20px;


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



            .bell {
                color: white;
                font-size: 17px;
                margin-left: 40px;
                cursor: pointer;
            }

            input {
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
                    font-size: 17px;
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
