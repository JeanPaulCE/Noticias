<script setup></script>

<template>
	<section class="w-75 d-flex flex-column text-center align-items-center gap-1 mx-auto">
		<i class="bi bi-exclamation-circle"></i>
		<h2 class="fw-bold">404<br />Página no encontrada</h2>
        <p class="text-light opacity-75">
            ¡No te asustes! Intenta corregir la búsqueda o regresa a 
            <router-link class="text-light text-decoration-none" to="/">inicio</router-link>
        </p>
	</section>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars';
@use '../assets/sass/spacing';

i {
	font-size: calc(spacing.$spacer * 3);
}

a:hover {
    color: vars.$primary !important;
    opacity: 1 !important;
}
</style>
