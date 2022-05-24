<script setup>
import Logo from "./components/Logo.vue";
import BtnsSc from "./layouts/Btns-sc.vue";
import Nav from "./layouts/Nav.vue";
</script>

<template>
  <div class="main">
    <Nav></Nav>
    <BtnsSc></BtnsSc>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background: var(--bg);
  height: 100vh;
  overflow-y: scroll;
}
</style>
