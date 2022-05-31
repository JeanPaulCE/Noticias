<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";

const buttons = ref([
  { 
    msg: 'Para ti',
    class: "btn-red"
  },
  {
    msg: 'Popular',
    class: "btn-border",
  },
  { 
    msg: 'Reciente',
    class: "btn-border" 
  }
]);

function click(btnIndex) {
  for (let index = 0; index < buttons.value.length; index++) {
    if (btnIndex == index) {
      buttons.value[index].class = "btn-red";
    } else {
      buttons.value[index].class = "btn-border";
    }
  }
}
</script>
<template>
  <div class="row gx-2">
    <div class="col-4">
      <Button
        @click="click(0)"
        class="w-100"
        msg="Para ti"
        :type="buttons[0].class"
        url="dir"
      />
    </div>
    <div class="col-4">
      <Button
        @click="click(1)"
        class="w-100"
        msg="Popular"
        :type="buttons[1].class"
        url="dir"
      />
    </div>
    <div class="col-4">
      <Button
        @click="click(2)"
        class="w-100"
        msg="Reciente"
        :type="buttons[2].class"
        url="dir"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>