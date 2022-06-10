<script setup>
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";
import isMobile from "../helpers/isMobile";
import { ref, onMounted } from "vue";
import fetchAPI from "../helpers/fetchAPI";
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";

const props = defineProps({
  news: Array,
});

const news = ref([]);
const newsBackUp = ref([]);

onMounted(() => {
  fetchAPI("/news").then((data) => {
    newsBackUp.value = data;
    news.value = newsBackUp.value;
  });
});

function filterCategory(category) {
  news.value = newsBackUp.value;
  news.value = news.value.filter((item, index) => {
    return item.category === category;
  });

  if (category == "Todas") {
    news.value = newsBackUp.value;
  }
}

const buttons = [
  {
    msg: "Perfil",
    class: "btn-border",
    url: "/admin-perfil",
  },
  {
    msg: "Lista",
    class: "btn-red",
    url: "/admin-lista",
  },
  {
    msg: "Nuevo",
    class: "btn-border",
    url: "/publicacion",
  },
];
</script>

<template>
  <section>
    <h2 class="mg--4 mb-2" :class="{ 'mx-2': isMobile() }">Lista</h2>
    <div class="mb-2">
      <ButtonGroupThree @cliked="cliked" :buttons="buttons" />
    </div>
    <Categorias @selectCategory="filterCategory"></Categorias>
    <Gallery :news="news" msg="editar" direction="AdminEdit"></Gallery>
  </section>
</template>

<style lang="scss" scoped></style>
