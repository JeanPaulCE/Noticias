<script setup>
import Like from "../components/Like.vue";
import { ref, onMounted, watch } from "vue";
import isMobile from "../helpers/isMobile";
import Gallery from "../layouts/Gallery.vue";
import { useRoute } from "vue-router";
import api from "../helpers/ApiConection";

const news = ref([]);
const selectedNew = ref([]);
const route = useRoute();

const props = defineProps({
  news: Array,
});

onMounted(() => {
  api.detalle({ id: route.params.id }).then((res) => {
    selectedNew.value = res.data.new[0];
    let date = new Date(selectedNew.value.created_at + "");
    let m = date.getMonth();
    let y = date.getFullYear();
    let d = date.getDay();
    selectedNew.value.created_at = d + "-" + m + "-" + y;
    api.all().then((data) => {
      var c = data.data.all;
      var a = c.filter((item, index) => {
        return item.categories[0].name === selectedNew.value.categories[0].name;
      });
      news.value = a.slice(0, 5);
    });
  });
});

watch(route, (to) => {
  selectedNew.value = [];
  api.detalle({ id: route.params.id }).then((res) => {
    selectedNew.value = res.data.new[0];
    let date = new Date(selectedNew.value.created_at + "");
    let m = date.getMonth();
    let y = date.getFullYear();
    let d = date.getDay();
    selectedNew.value.created_at = d + "-" + m + "-" + y;
    api.all().then((data) => {
      var c = data.data.all;
      var a = c.filter((item, index) => {
        return item.categories[0].name === selectedNew.value.categories[0].name;
      });
      news.value = a.slice(0, 5);
    });
  });
});

function prueba(isLike) {
  api.like();
  if (isLike) {
    selectedNew.value.likes_count++;
  } else {
    selectedNew.value.likes_count--;
  }
}
</script>

<template>
  <div>
    <div :class="{ 'mg--4': !isMobile(), 'px-1': isMobile() }">
      <div class="container-fluid mt-3">
        <div class="overflow">
          <img class="w-100" :src="api.api_url() + selectedNew.image" alt="" />
        </div>
        <h2 class="fw-bold mt-3">{{ selectedNew.title }}</h2>
      </div>
      <div class="container-fluid mt-1">
        <p class="opacity-50">
          {{ selectedNew.created_at }}
          <!-- {{ selectedNew.categories[0].name }} -->
        </p>
        <p class="mt-2">{{ selectedNew.content }}</p>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col-sm-2 col-4 d-flex">
            <Like @doLike="prueba" :likes="selectedNew.likes_count"></Like>
            <p class="ms-2 fw-bold mt-1 p-like">
              {{ selectedNew.likes_count }}
            </p>
          </div>
        </div>
      </div>
      <h3 class="container-fluid my-3 fw-bold">Noticias relacionadas</h3>
    </div>
  </div>

  <div>
    <Gallery class="mb-3" :news="news"></Gallery>
  </div>
</template>

<style lang="scss" scoped>
.div-p {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.p-like {
  font-size: 1rem;
}

@media (min-width: 768px) {
  .overflow {
    height: 65vh;
    overflow: hidden;
  }

  .p-like {
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
