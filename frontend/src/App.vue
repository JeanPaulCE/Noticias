<script setup>
import Logo from "./components/Logo.vue";
import BtnsSc from "./layouts/Btns-sc.vue";
</script>

<template>
  <div class="main">
    <Logo></Logo>
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
