<script setup>
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";

const props = defineProps({
  news: Array,
});

function prueba(cat){
  console.log("Llegó la categoría => "+cat);
}
</script>

<template>
  <div class="container-fluid pb-4">
    <h1 class="fw-bold">Categorías</h1>
    <Categorias @select="prueba"></Categorias>
    <Gallery :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
  @media (min-width: 768px) {
    h1{
      font-size: 2.375rem;
      padding-left: 3rem;
    }
  }
</style>
