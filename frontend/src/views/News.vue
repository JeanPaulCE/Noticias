<script setup>
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";
import { ref, onMounted } from "vue";
import api from "../helpers/ApiConection";

const news = ref([]);
const newsBackUp = ref([]);
let filtredby = "";
onMounted(() => {
  api.all().then((data) => {
    newsBackUp.value = data.data.all;
    news.value = newsBackUp.value;
  });
});

function filterCategory(category) {
  category = category.name;
  if (category != filtredby) {
    news.value = newsBackUp.value;
    news.value = news.value.filter((item, index) => {
      return item.categories[0].name === category;
    });
  } else {
    news.value = newsBackUp.value;
  }
  filtredby = category;
}
</script>

<template>
  <div class="container-fluid pb-4">
    <h1 class="fw-bold">Categorías</h1>
    <Categorias @selectCategory="filterCategory"></Categorias>
    <Gallery :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  h1 {
    font-size: 2.375rem;
    padding-left: 3rem;
  }
}
</style>
