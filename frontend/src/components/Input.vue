<script setup>
const props = defineProps({
  label: String,
  type: String,
  place: String,
  ico: String,
});
</script>

<template>
  <div class="col-md-6">
    <label
      :for="type"
      v-if="label"
      class="form-label text-white fs-4 fw-bold opacity-50 mb-1"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      class="form-control text-white fs-5"
      :placeholder="place"
      :id="type"
    />
    <img class="" :src="ico" alt="" />
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/vars";

div {
  position: relative;
  img {
    position: absolute;
    top: 0;
    right: calc(spacing.$spacer / 2);
    bottom: 0;
    margin: auto 0;
  }
}

input {
  background-color: vars.$input;
  height: spacing.$spacer;
  border: none;
  border-radius: 0.5rem;
  padding: calc(spacing.$spacer / 2);
  color: #fff;

  &:focus {
    background-color: vars.$input;
    box-shadow: none;
  }
}
</style>
