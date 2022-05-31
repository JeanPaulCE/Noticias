<script setup>
import { ref, onMounted } from "vue";
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Card from "../layouts/Card.vue";
import fetchAPI from "../helpers/fetchAPI";

const news = ref();
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

onMounted(() => {
  fetchAPI().then((data) => {
    news.value = data;
  });
});
</script>

<template>
  <section>
    <ButtonGroupThree class="center" :buttons="buttons" />

    <div v-for="(item, index) in news" class="row my-1 position-relative">
      <Card v-bind="item" :index="index" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";

section {
  display: flex;
  flex-direction: column;
  gap: calc(spacing.$spacer / 2);
}
</style>
