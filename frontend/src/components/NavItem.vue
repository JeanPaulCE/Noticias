<script setup>
const props = defineProps({
    text: String,
});
</script>

<template>
	<li class="nav-item">
		<a class="nav-link active" aria-current="page" href="#">{{ text }}</a>
	</li>
</template>

<style lang="scss" scoped></style>
