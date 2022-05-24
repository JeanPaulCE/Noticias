<script setup>
import { ref } from 'vue'
import Nav from './layouts/Nav.vue';

const count = ref(0);
function addCount() {
  count.value++;
}
</script>

<template>
	<Nav />
  <button @click="addCount" class="btn btn-light">Add</button>
  {{ count }}
</template>

<style lang="scss" scoped>

</style>
