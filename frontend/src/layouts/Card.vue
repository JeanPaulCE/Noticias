<script setup>
const props = defineProps({
	id: String,
	title: String,
	image: String,
	index: Number,
});
</script>

<template>
	<div :class="index % 2 == 0 ? 'card-left' : 'card-right'" class="position-relative">
		<img class="w-100" :src="image" :alt="title" loading="lazy" />
		<div class="position-absolute">
			<h3>{{ title }}</h3>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/spacing.scss';

img {
	opacity: 0.5;
}

.card-left {
	margin-right: spacing.$spacer + (spacing.$spacer / 2);
}

.card-right {
	margin-left: spacing.$spacer + (spacing.$spacer / 2);
}

.card-left,
.card-right {
	@media (min-width: 768px) {
		
	}
}
</style>
