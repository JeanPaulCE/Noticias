<script setup>
const props = defineProps({
	id: String,
	label: String,
	type: String,
	place: String,
	ico: String,
});

function togglePasswordIcon() {
	const icon = event.target;
	const input = icon.nextSibling;
	
	if (input.type === 'password') {
		input.type = 'text';
		icon.classList.remove('bi-eye-slash');
		icon.classList.add('bi-eye');
	}
	else {
		input.type = 'password';
		icon.classList.remove('bi-eye');
		icon.classList.add('bi-eye-slash');
	}
}
</script>

<template>
	<div class="col-md">
		<label
			:for="id"
			v-if="label"
			class="form-label text-white fs-4 fw-bold opacity-50 mb-1"
		>
			{{ label }}
		</label>

		<div class="position-relative">
			<img v-if="ico" class="" :src="ico" alt="" />
      <i v-if="type === 'password'" class="bi bi-eye-slash" @click="togglePasswordIcon"></i>
			<input
				:type="type"
				class="form-control text-white fs-5"
				:placeholder="place"
				:id="id"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/spacing';
@use '../assets/sass/vars';

div {
	img,
  i {
    background-color: vars.$input;
    color: vars.$light;
    font-size: calc(spacing.$spacer / 2);
		position: absolute;
    top: 50%;
    transform: translateY(-50%);
		right: calc(spacing.$spacer / 2);
		margin: auto 0;
	}
}

input {
	background-color: vars.$input;
	height: spacing.$spacer;
	border: none;
	border-radius: 0.5rem;
	padding: calc(spacing.$spacer / 2);
	color: #fff;

	&:focus {
		background-color: vars.$input;
		box-shadow: none;
	}
}
</style>
