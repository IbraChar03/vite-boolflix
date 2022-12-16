<script >
export default {
    props: {
        arrCards: Array
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="(item, index) in arrCards" :key="item.id">
            <img src="" alt="">
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
