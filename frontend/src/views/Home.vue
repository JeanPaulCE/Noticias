<script setup>
import isMobile from "../helpers/isMobile";
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Gallery from "../layouts/Gallery.vue";

const props = defineProps({
  news: Array,
});

const buttons = [
  {
    msg: "Para ti",
    class: "btn-red",
  },
  {
    msg: "Popular",
    class: "btn-border",
  },
  {
    msg: "Reciente",
    class: "btn-border",
  },
];
</script>

<template>
  <section>
    <ButtonGroupThree
      class="mt-2"
      :class="{ 'mg--4': !isMobile() }"
      :buttons="buttons"
    />
    <Gallery :news="news" />
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(spacing.$spacer / 2);
}
</style>
