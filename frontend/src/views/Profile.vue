<script setup>
import ProfileLayout from '../layouts/ProfileLayout.vue';
import isMobile from '../helpers/isMobile';
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

function filterCategory(category){
  
  news.value=newsBackUp.value;
  news.value = news.value.filter((item, index) => {
    return item.category === category
  });

  if(category=="Todas"){
    news.value=newsBackUp.value;
  }
}

</script>

<template>
	<section :class="{ 'mg--4': !isMobile(),'px-1': isMobile()}">
		<h2 class="fw-bold" :class="{'px-1': isMobile()}">Perfil</h2>
		<ProfileLayout class="mt-2"></ProfileLayout>
		<h3 class="fw-bold mt-5">Tus favoritos</h3>
		<Categorias @selectCategory="filterCategory" class="mt-4"></Categorias>
    	<Gallery :news="news"></Gallery>
	</section>
</template>

<style lang="scss" scoped></style>