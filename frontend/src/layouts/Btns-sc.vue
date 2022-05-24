<script setup>
import { ref } from "vue";
import Boton from "../components/Boton.vue";
const botones = ref(["btn-red", "btn-border", "btn-border"]);

function click(btn) {
  for (let index = 0; index < botones.value.length; index++) {
    if (btn == index) {
      botones.value[index] = "btn-red";
    } else {
      botones.value[index] = "btn-border";
    }
  }
}
</script>
<template>
  <div class="row mx-1 gx-2">
    <div class="col">
      <Boton
        @click="click(0)"
        class="w-100"
        msg="Para ti"
        :type="botones[0]"
        url="dir"
      ></Boton>
    </div>
    <div class="col">
      <Boton
        @click="click(1)"
        class="w-100"
        msg="Popular"
        :type="botones[1]"
        url="dir"
      ></Boton>
    </div>
    <div class="col">
      <Boton
        @click="click(2)"
        class="w-100"
        msg="Reciente"
        :type="botones[2]"
        url="dir"
      ></Boton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
