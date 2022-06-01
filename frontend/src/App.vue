<script setup>
import { ref, onMounted } from "vue";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
import fetchAPI from "./helpers/fetchAPI";

const news = ref([]);

onMounted(() => {
  fetchAPI('/news').then((data) => {
    news.value = data;
  });
});
</script>

<template>
  <Header :news="news" />
  <main class="container-fluid p-0 text-white">
    <!-- <div> -->
      <router-view :news="news"></router-view>
    <!-- </div> -->
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
@use "./assets/sass/spacing";

main {
  min-height: 70vh;
}

main {
  div {
    display: flex;
    flex-direction: column;
    gap: spacing.$spacer;
  }
}
</style>
