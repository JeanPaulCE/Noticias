<script setup>
const props = defineProps({
  type: String,
  msg: String,
  url: String,
});

function clicked() {
  console.log(props.url);
}
</script>

<template>
  <button @click="clicked" :class="type">{{ msg }}</button>
</template>

<style lang="scss" scoped>
@import "../assets/sass/custom.scss";
button {
  border-style: hidden;
  border-radius: 12px;
  height: $spacer;
  padding: 0 calc($spacer/2);
  color: #ffff;
}
.btn-red {
  background-color: var(--red);
}
.btn-border {
  background-color: rgba(0, 0, 0, 0);
  border-color: #303146;
  border-style: solid;
  border-width: 1px;
}
.btn-clean {
  background-color: rgba(0, 0, 0, 0);
}
</style>
