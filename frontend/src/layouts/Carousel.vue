<script setup>
import { computed } from 'vue';

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
				<img :src="item.image" class="d-block w-100" :alt="item.title" />
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
</template>

<style lang="scss" scoped>
img {
	@media (min-width: 768px) {
		aspect-ratio: 3 / 1;
        object-fit: cover;
	}
}
</style>
