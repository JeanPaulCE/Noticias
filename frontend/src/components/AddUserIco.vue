<template>
  <div class="col-sm text-center">
    <input type="file" id="input-file" />
    <label for="input-file">
      <i class="bi bi-person-circle icon"></i>
      <h3 class="fw-bold">{{ user }}</h3>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: String,
    default: "UserName",
  },
});
</script>

<style lang="scss" scoped>
.icon {
  font-size: 8rem;
}
input {
  display: none;
}
label {
  position: relative;
  &:hover {
    opacity: 40%;
  }
}
</style>
