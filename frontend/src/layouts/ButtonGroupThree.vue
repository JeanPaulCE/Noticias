<script setup>
import Button from "../components/Button.vue";
import isMobile from "../helpers/isMobile";

const props = defineProps({
  buttons: Array,
});

function click(btnIndex) {
  for (let index = 0; index < buttons.value.length; index++) {
    if (btnIndex == index) {
      props.buttons.value[index].class = "btn-red";
    } else {
      props.buttons.value[index].class = "btn-border";
    }
  }
}
</script>
<template>
  <div :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }" class="row gx-2">
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

<style lang="scss" scoped></style>
