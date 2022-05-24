<script setup>
import Boton from "../components/Boton.vue";
</script>
<template>
  <div class="row mx-1 gx-2">
    <div class="col">
      <Boton class="w-100" msg="Para ti" type="btn-red" url="dir"></Boton>
    </div>
    <div class="col">
      <Boton class="w-100" msg="Popular" type="btn-border" url="dir"></Boton>
    </div>
    <div class="col">
      <Boton class="w-100" msg="Reciente" type="btn-border" url="dir"></Boton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
