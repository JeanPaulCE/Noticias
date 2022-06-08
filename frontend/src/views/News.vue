<script setup>
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";
import { ref, onMounted } from "vue";
import fetchAPI from "../helpers/fetchAPI";


const news = ref([]);
const newsBackUp = ref([]);

onMounted(() => {
  fetchAPI("/news")
  .then((data) => {
    newsBackUp.value = data;
    news.value = newsBackUp.value;
  });
});


function prueba(cat){
  
  news.value=newsBackUp.value;
  news.value = news.value.filter((item, index) => {
    return item.category === cat
  });

  if(cat=="Todas"){
    news.value=newsBackUp.value;
  }
  /*console.log(typeof cat);
  console.log(news.value);*/
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
