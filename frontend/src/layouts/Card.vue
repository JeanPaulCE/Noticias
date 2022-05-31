<script setup>
const props = defineProps({
	id: String,
	title: String,
	image: String,
	index: Number,
});
</script>

<template>
	<div class="w-100" :class="(index % 2) == 0 ? 'card-left' : 'card-right'">
		<h3 class="position-absolute">{{ title }}</h3>
		<img class="w-100" :src="image" :alt="title" loading="lazy" />
	</div>
</template>

<style lang="scss" scoped>
.card-left {
	
}

.card-right {
	
}
</style>
