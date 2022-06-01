<script setup>
import isMobile from "../helpers/isMobile";
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Card from "../layouts/Card.vue";

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
    <ButtonGroupThree class="center" :buttons="buttons" />

    <div :class="{ 'mx-3': !isMobile() }" class="container-responsive row m-0">
      <div
        v-for="(item, index) in news"
        class="col-md-4 p-0 my-2 position-relative"
      >
        <Card v-bind="item" :index="index" />
      </div>
    </div>
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
