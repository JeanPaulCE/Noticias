<script setup>
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";

import ButtonGroup from "./layouts/ButtonGroup.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <Header />
  <div class="main">
    <!-- Test Roter -->
    <router-link to="/">Inicio</router-link>
    <router-link to="/news">Noticias</router-link>
    <link-view />
    <router-view></router-view>
    <!-- Test Router -->
  </div>

  <Footer />
</template>

<style lang="scss" scoped>
.main {
  background: var(--bg);
  height: 100vh;
  overflow-y: scroll;
}
</style>
