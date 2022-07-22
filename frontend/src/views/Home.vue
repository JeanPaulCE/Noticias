<script setup>
import isMobile from "../helpers/isMobile";
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Gallery from "../layouts/Gallery.vue";
import { ref } from "vue";
import api from "../helpers/ApiConection";

const news = ref([]);

const buttons = [
  {
    msg: "Popular",
    class: "btn-red",
  },
  {
    msg: "Reciente",
    class: "btn-border",
  },
  {
    msg: "Para ti",
    class: "btn-border",
  },
];

const filtro = ref("Para ti");
api.popular().then((res) => {
  news.value = res.data.all;
});

function buttonsCliked(index) {
  switch (index) {
    case 0:
      news.value = [];
      api.popular().then((res) => {
        news.value = res.data.all;
      });
      filtro.value = "Popular";
      break;
    case 1:
      news.value = [];
      api.reciente().then((res) => {
        news.value = res.data.all;
      });
      filtro.value = "Reciente";
      break;
    case 2:
      news.value = [];
      api.parati().then((res) => {
        res.data.paraTi.forEach((element) => {
          element.forEach((elemen) => {
            news.value.push(elemen);
          });
        });
      });
      filtro.value = "Para ti";
      break;
    default:
      break;
  }
}
</script>

<template>
  <section>
    <ButtonGroupThree
      @cliked="buttonsCliked"
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
