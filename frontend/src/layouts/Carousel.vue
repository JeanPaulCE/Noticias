<script setup>
<<<<<<< HEAD
import { computed } from 'vue';
import isMobile from '../helpers/isMobile';
=======
import { computed } from "vue";
>>>>>>> 2d6da50d4fd8050a6d6237e052adff577d15fe8e

const props = defineProps({
  news: Array,
});

const popularNews = computed(() => {
  const popularNews = props.news;
  popularNews.sort((itemOne, itemTwo) => {
    if (itemOne.likes < itemTwo.likes) {
      return 1;
    }
    if (itemTwo.likes > itemOne.likes) {
      return -1;
    }
    return 0;
  });

  return popularNews.slice(0, 3);
});
</script>

<template>
<<<<<<< HEAD
	<div
		id="carousel"
		class="carousel slide"
		:class="{ 'mg--4': !isMobile() }"
		data-bs-ride="carousel"
	>
		<div class="carousel-inner">
			<div
				v-for="(item, index) in popularNews"
				:class="{ active: index == 0 }"
				class="carousel-item"
			>
				<img :src="item.image" :alt="item.title" class="w-100 opacity-75" />
				<div class="position-absolute">
					<h2 class="fs-2 text-light">{{ item.title }}</h2>
					<p class="fs-4 text-light opacity-75">{{ item.date }} {{ item.author }}</p>
				</div>
			</div>
		</div>
		<button
			class="carousel-control-prev"
			type="button"
			data-bs-target="#carousel"
			data-bs-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button
			class="carousel-control-next"
			type="button"
			data-bs-target="#carousel"
			data-bs-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
=======
  <div
    id="carousel"
    class="carousel slide container-responsive"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(item, index) in popularNews"
        :class="{ active: index == 0 }"
        class="carousel-item"
      >
        <div class="position-absolute w-100 h-100 filter"></div>
        <img :src="item.image" :alt="item.title" class="w-100" />
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
>>>>>>> 2d6da50d4fd8050a6d6237e052adff577d15fe8e
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
