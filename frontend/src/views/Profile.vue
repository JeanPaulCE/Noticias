<script setup>
import ProfileLayout from "../layouts/ProfileLayout.vue";
import isMobile from "../helpers/isMobile";
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";
import { ref, onMounted } from "vue";
import api from "../helpers/ApiConection";

const user = ref({});
const news = ref([]);
const fav = ref([]);

onMounted(() => {
  api.perfil().then((res) => {
    user.value = res.data.perfil;
  });
  api.getLikes().then((res) => {
    news.value = res.data.likes;
  });
  api.favoritos().then((res) => {
    fav.value = res.data.favoritos;
  });
});

function setFavoritos(category) {
  api.addFavoritos({ favorito: category.id }).then((res) => {
    fav.value = res.data.favoritos;
  });
}
</script>

<template>
  <section :class="{ 'mg--4': !isMobile(), 'px-1': isMobile() }">
    <h2 class="fw-bold" :class="{ 'px-1': isMobile() }">Perfil</h2>
    <ProfileLayout v-bind="user" class="mt-2"></ProfileLayout>
    <h3 class="fw-bold mt-5">Tus favoritos</h3>
    <Categorias @selectCategory="setFavoritos" class="mt-4"></Categorias>
    <div class="d-flex flex-wrap justify-content-center w-75 mx-auto">
      <p class="d-inline-block p-2" v-for="item in fav" :key="item.id">
        {{ item.name }}
      </p>
    </div>
    <h3 class="fw-bold mt-5">Tus Likes</h3>
    <Gallery :news="news"></Gallery>
  </section>
</template>

<style lang="scss" scoped></style>
