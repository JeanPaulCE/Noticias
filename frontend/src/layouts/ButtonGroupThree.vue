<script setup>

import { ref, defineEmits } from "vue";
import Button from "../components/Button.vue";
import isMobile from "../helpers/isMobile";

const props = defineProps({
  buttons: Array,
});


const btns = ref(props.buttons);

const emit = defineEmits({
  cliked: (index) => {
    if (index) return index;
    else return false;
  },
});

function click(btnIndex) {
  emit("cliked", btnIndex);
  for (let index = 0; index < btns.value.length; index++) {
    if (btnIndex == index) {
      btns.value[index].class = "btn-red";
    } else {
      btns.value[index].class = "btn-border";
    }
  }
}
</script>
<template>
  <div :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }" class="row gx-2">
    <div v-for="(item, index) in btns" class="col-4">
      <Button
        @click="click(index)"
        class="w-100"
        :msg="item.msg"
        :type="item.class"
        :url="item.url"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
