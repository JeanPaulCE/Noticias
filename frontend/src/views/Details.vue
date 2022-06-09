<script setup>
  import Like from "../components/Like.vue";
  import { ref,onMounted } from "vue";
  import isMobile from '../helpers/isMobile';
  import Gallery from "../layouts/Gallery.vue";
  import { useRoute } from "vue-router";
  import fetchAPI from "../helpers/fetchAPI";


  const news =ref([]);
  const selectedNew = ref([]);
  const route = useRoute();

  const props = defineProps({
    news: Array,
  });

  onMounted(() => {
    fetchAPI("/news")
    .then((data) => {
      selectedNew.value = data[route.params.id];
      news.value = data;
      news.value = news.value.filter((item, index) => {
        if(item.id!=selectedNew.value.id){
          return item.category === selectedNew.value.category
        }
      });
    });
  });

  function prueba(isLike){
    if(isLike){
      selectedNew.value.likes++;
    }else{
      selectedNew.value.likes--;
    }
  }

  function refreshContent(index){
    console.log("Llego a details => "+index);
    fetchAPI("/news")
    .then((data) => {
      selectedNew.value = data[index-1];
      news.value = data;
      news.value = news.value.filter((item, index) => {
        if(item.id!=selectedNew.value.id){
          return item.category === selectedNew.value.category
        }
      });
    });
  }

</script>

<template>
  <div>
    <div :class="{ 'mg--4': !isMobile(),'px-1': isMobile()}">
      <div class="container-fluid mt-3">
        <div class="overflow"> 
          <img class="w-100" :src="selectedNew.image" alt="" />
        </div>
        <h2 class="fw-bold mt-3">{{ selectedNew.title }}</h2>
      </div>
      <div class="container-fluid mt-1">
        <p class="opacity-50">
          {{ selectedNew.date }} | Por: {{ selectedNew.Autor }} | {{ selectedNew.category }}
        </p>
        <p class="mt-2">{{ selectedNew.content }}</p>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col-sm-2 col-4 d-flex">
            <Like @doLike="prueba" :likes="selectedNew.likes"></Like>
            <p class="ms-2 fw-bold mt-1 p-like">{{selectedNew.likes}}</p>
          </div>
        </div>
      </div>
        <h3 class="container-fluid  my-3 fw-bold">Noticias relacionadas</h3>
    </div>
  </div>

  <div >
    <Gallery @clickCard="refreshContent" class="mb-3" :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
.div-p {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.p-like{
  font-size: 1rem;
}


@media (min-width: 768px) {

  .overflow{
    height: 65vh;
	  overflow: hidden;
  }

  .p-like{
    font-size: 1.25rem;
  }
}

@media (min-width: 992px) {
  .div-p {
    padding-left: 6.25rem;
    padding-right: 6.25rem;
  }
}
</style>
