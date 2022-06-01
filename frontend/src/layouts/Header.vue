<script setup>
import Nav from "./Nav.vue";
import Hero from '../layouts/Carousel.vue';

const props = defineProps({
  news: Array,
});
</script>

<template>
  <header class="pt-2">
    <Nav></Nav>
    <Hero :news="news" v-if="$route.path == '/'" class="mb-2" />
  </header>
</template>

<style lang="scss" scoped></style>
