<script setup>
import Categorias from "../layouts/Categorias.vue";

const props = defineProps({
  news: Array,
});
</script>

<template>
  <h1>Noticias</h1>
  <Categorias></Categorias>
</template>

<style lang="scss" scoped></style>
