<script setup>
import Like from "../components/Like.vue";
import { ref, computed } from "vue";

import Gallery from "../layouts/Gallery.vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  news: Array,
});
console.log(props.news);
const route = useRoute();
const item = computed(() => {
  const selectedNew = props.news[route.params.id];
  return selectedNew;
});
</script>

<template>
  <div>
    <div>
      <div class="container-fluid div-p mt-3">
        <img class="w-100" :src="item.image" alt="" />
        <h1 class="fw-bold mt-3">{{ item.title }}</h1>
      </div>
      <div class="container-fluid div-p mt-1">
        <p class="opacity-50">
          {{ item.date }} | Por: {{ item.Autor }} | {{ item.category }}
        </p>
        <p class="mt-2">{{ item.content }}</p>
      </div>
      <div class="container-fluid div-p mt-2">
        <Like :likes="item.likes"></Like>
      </div>
    </div>
  </div>

  <div>
    <h2 class="container-fluid div-p my-3 fw-bold">Noticias relacionadas</h2>
    <Gallery :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
.div-p {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

p {
  line-height: 1.5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.375rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
}

@media (min-width: 992px) {
  .div-p {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }
}
</style>
