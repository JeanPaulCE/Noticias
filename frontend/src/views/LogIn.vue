<script setup>
import isMobile from '../helpers/isMobile';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';

const buttons = [
	{
		msg: 'Iniciar sesión',
		class: 'btn-red',
	},
	{
		msg: 'Registrarme',
		class: 'btn-border',
	},
];
</script>

<template>
	<section :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }">
		<h1 class="fs-1 mb-1">Registro</h1>
		<p class="fs-5 text-white opacity-50 mb-2">
			¡Registrate para ver las últimas noticias!
		</p>
		<form class="row gx-3 gy-2 mb-3">
			<Input label="Nombre de usuario" type="text" class="col-md-6" />
			<Input label="Contraseña" type="password" class="col-md-6" />
			<div v-for="item in buttons" class="col-md-6">
				<Button v-bind="item" class="w-100" />
			</div>
		</form>
	</section>
</template>

<style lang="scss" scoped></style>
