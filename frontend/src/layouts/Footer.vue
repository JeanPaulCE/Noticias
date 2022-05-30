<script setup></script>

<template>
  <footer class="px-2 py-3 text-white">
    <p class="w-100 m-0">© 2022 NewsGaming. Todos los derechos reservados.</p>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/sass/vars";

footer {
  background-color: vars.$footerColor;
  p {
    text-align: center;
  }
}
</style>
