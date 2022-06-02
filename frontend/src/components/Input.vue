<script setup>
const props = defineProps({
	label: String,
    type: String,
});
</script>

<template>
	<div class="col-md-6">
		<label
			:for="type"
			class="form-label text-white fs-4 fw-bold opacity-50 mb-1"
		>
		{{ label }}
		</label>
		<input
			:type="type"
			class="form-control text-white fs-5"
			:id="type"
		/>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/spacing';
@use '../assets/sass/vars';

input {
	background-color: vars.$input;
	height: spacing.$spacer;
	border: none;
	border-radius: .5rem;
	padding: calc(spacing.$spacer / 2);

	&:focus {
		background-color: vars.$input;
		box-shadow: none;
	}
}
</style>
