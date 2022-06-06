<script setup>
  import Like from "../components/Like.vue";
  import { ref, computed } from "vue";
  import isMobile from '../helpers/isMobile';
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
    <div :class="{ 'mg--4': !isMobile(),'px-1': isMobile()}">
      <div class="container-fluid mt-3">
        <div class="overflow"> 
          <img class="w-100" :src="item.image" alt="" />
        </div>
        <h2 class="fw-bold mt-3">{{ item.title }}</h2>
      </div>
      <div class="container-fluid mt-1">
        <p class="opacity-50">
          {{ item.date }} | Por: {{ item.Autor }} | {{ item.category }}
        </p>
        <p class="mt-2">{{ item.content }}</p>
      </div>
      <div class="container mt-2">
        <Like :likes="item.likes"></Like>
      </div>
        <h3 class="container-fluid  my-3 fw-bold">Noticias relacionadas</h3>
    </div>
  </div>

  <div >
    <Gallery :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
.div-p {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}



@media (min-width: 768px) {

  .overflow{
    height: 65vh;
	  overflow: hidden;
  }
}

@media (min-width: 992px) {
  .div-p {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }
}
</style>
