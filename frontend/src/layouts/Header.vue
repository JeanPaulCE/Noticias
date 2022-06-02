<script setup>
import Nav from "./Nav.vue";
import Hero from "../layouts/Carousel.vue";

const props = defineProps({
  news: Array,
});
</script>

<template>
  <header class="pt-1">
    <Nav></Nav>
    <Hero :news="news" v-if="$route.path == '/'" />
  </header>
</template>

<style lang="scss" scoped></style>
