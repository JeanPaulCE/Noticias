<script setup>
import { computed, onBeforeMount, onMounted, ref, render } from "vue";
import isMobile from "../helpers/isMobile";
import api from "../helpers/ApiConection";

const news = ref([]);

api.popular().then((res) => {
  let popularNews = res.data.all;
  popularNews.sort((itemOne, itemTwo) => {
    if (itemOne.likes_count < itemTwo.likes_count) {
      return 1;
    }
    if (itemTwo.likes_count > itemOne.likes_count) {
      return -1;
    }
    return 0;
  });
  news.value = popularNews.slice(0, 3);
});
</script>

<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in news"
        :class="{ active: index == 0 }"
        class="carousel-item"
      >
        <div class="position-absolute w-100 h-100 filter"></div>
        <img
          :src="api.api_url() + item.image"
          :alt="item.title"
          class="w-100"
        />
        <div class="position-absolute text-content">
          <h2 class="fs-2 text-light">{{ item.title }}</h2>
          <p class="fs-4 text-light opacity-75">
            {{ item.date }} {{ item.author }}
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";

.icon {
  width: 3rem;
  height: 3rem;
}

.carousel-item {
  height: 30vh;
  .filter {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 54%,
      rgba(0, 0, 0, 1) 100%
    );
  }

  .text-content {
    left: 10%;
    bottom: calc(spacing.$spacer);
    @media (min-width: 768px) {
      bottom: calc(spacing.$spacer * 1.5);
    }
  }

  @media (min-width: 992px) {
    height: 60vh;
  }
}
</style>
