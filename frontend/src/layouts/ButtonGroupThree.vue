<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";

const props = defineProps({
	buttons: Array,
});

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
    <div v-for="(item, index) in buttons" class="col-4">
      <Button
        @click="click(index)"
        class="w-100"
        :msg="item.msg"
        :type="item.class"
        url="dir"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>