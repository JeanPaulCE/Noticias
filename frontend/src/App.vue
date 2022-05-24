<script setup>
import Logo from "./components/Logo.vue";
import Btn from "./layouts/ButonGroup.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <div class="main">
    <Nav></Nav>
    <Btn></Btn>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: var(--bg);
  height: 100vh;
  overflow-y: scroll;
}
</style>
