<script setup>
import Nav from "./Nav.vue";
import Hero from '../layouts/Carousel.vue';

</script>

<template>
  <header class="pt-2">
    <Nav></Nav>
    <Hero v-if="$route.path == '/'" class="mb-2" />
  </header>
</template>

<style lang="scss" scoped></style>
