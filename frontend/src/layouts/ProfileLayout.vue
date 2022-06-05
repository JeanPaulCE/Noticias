<script setup>
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
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

	<div :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }">

		<form class="row gx-3 gy-2">
            <div class="col-sm text-center">
                <i class="bi bi-person-circle icon"></i>
                <h3 class="fw-bold">UserName</h3>
            </div>
            <div class="col-sm">
                <Input label="Nombre de usuario" type="text" class="py-1" />
                <Input label="Correo electrónico" type="email" class="py-1" />
                <div class="row">
                    <div v-for="item in buttons" class="col-sm py-1">
                        <Button v-bind="item" class="w-100" />
                    </div>
                </div>
            </div>
		</form>
	</div>

</template>

<style lang="scss" scoped>
    .input{
        width: 100%;
    }

    .icon{
        font-size: 8rem;
    }

    @media (min-width: 768px) {

        /*.icon{
            font-size: 8rem; 
        }*/

    }
</style>