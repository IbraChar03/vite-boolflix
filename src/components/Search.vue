<script >
import { store } from "../store.js"
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="cont">
        <input type="text" v-model="store.searchInput" @keyup.enter="searchFunction">
    </div>

</template>

<style lang="scss" scoped>
.cont {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
