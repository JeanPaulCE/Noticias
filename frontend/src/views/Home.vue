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
<<<<<<< HEAD
    <ButtonGroupThree 
      :buttons="buttons" 
      class="mt-2"
=======
    <ButtonGroupThree
      class="mt-2 mx-2"
      :class="{ 'mg--4': !isMobile() }"
      :buttons="buttons"
>>>>>>> 2d6da50d4fd8050a6d6237e052adff577d15fe8e
    />

    <div
      :class="{ 'mg--4': !isMobile() }"
      class="container-responsive row spacing"
    >
      <div
        v-for="(item, index) in news"
        :class="{ '': !isMobile() }"
        class="col-md-4 col-sm-12 p-0 my-2 position-relative"
      >
        <Card v-bind="item" :index="index" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";

<<<<<<< HEAD
=======
.mg--4 {
  margin: calc(spacing.$spacer/2) calc(spacing.$spacer * 2.5) 0
    calc(spacing.$spacer * 2.5) !important;
}

>>>>>>> 2d6da50d4fd8050a6d6237e052adff577d15fe8e
section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(spacing.$spacer / 2);
}
</style>
