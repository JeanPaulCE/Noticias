<script setup>
const props = defineProps({
  type: String,
  msg: String,
  url: String,
});

function clicked() {}
</script>

<template>
  <button @click="clicked" :class="type">{{ msg }}</button>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/vars";

button {
  border-style: hidden;
  border-radius: 12px;
  height: spacing.$spacer;
  padding: 0 calc(spacing.$spacer/2);
  color: vars.$light;
}
.btn-red {
  background-color: vars.$primary;
}
.btn-border {
  background-color: rgba(0, 0, 0, 0);
  border-color: vars.$dark;
  border-style: solid;
  border-width: 1px;
}
.btn-clean {
  background-color: rgba(0, 0, 0, 0);
}
</style>
