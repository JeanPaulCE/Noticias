<script setup>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue';
import isMobile from '../helpers/isMobile';

const buttons = [
	{
		msg: 'Cambiar contraseña',
		class: 'btn-border',
	},
	{
		msg: 'Guardar',
		class: 'btn-red',
	},
];
</script>

<template>
	<section :class="{ 'mg--4': !isMobile(),'px-1': isMobile()}">
		<h2 class="fw-bold" :class="{'px-1': isMobile()}">Perfil</h2>
		<ProfileLayout class="mt-2"></ProfileLayout>
	</section>
</template>

<style lang="scss" scoped></style>