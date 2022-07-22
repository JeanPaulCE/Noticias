<script setup>
import Nav from "./Nav.vue";
import Hero from "../layouts/Carousel.vue";
import AppVue from "../App.vue";
import api from "../helpers/ApiConection";
</script>

<template>
  <header class="pt-1">
    <Nav></Nav>
    <Hero v-if="$route.path == '/'" />
  </header>
</template>

<style lang="scss" scoped></style>
