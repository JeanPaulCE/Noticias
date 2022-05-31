<script setup>
    const props = defineProps({
        title: String,
        img: String
    });

</script>

<template>

    <div class="">
        <img class="position-relative" src="../assets/valorant.jpeg" alt="">
        <p class="position-absolute bottom-50">Texto</p>
    </div>

</template>

<style lang="scss" scoped>

    img{
        height: 134px;
        width: 335px;
        opacity: 65%;
    }

</style>