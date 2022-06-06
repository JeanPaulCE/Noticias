<script setup>
import ProfileLayout from '../layouts/ProfileLayout.vue';
import isMobile from '../helpers/isMobile';
import Categorias from "../layouts/Categorias.vue";
import Gallery from "../layouts/Gallery.vue";

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

const props = defineProps({
  news: Array,
});

</script>

<template>
	<section :class="{ 'mg--4': !isMobile(),'px-1': isMobile()}">
		<h2 class="fw-bold" :class="{'px-1': isMobile()}">Perfil</h2>
		<ProfileLayout class="mt-2"></ProfileLayout>
		<h3 class="fw-bold mt-5">Tus favoritos</h3>
		<Categorias class="mt-4"></Categorias>
    	<Gallery :news="news"></Gallery>
	</section>
</template>

<style lang="scss" scoped></style>