<script setup>
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import isMobile from "../helpers/isMobile";
import AddUserIco from "../components/AddUserIco.vue";
import api from "../helpers/ApiConection";
import router from "../router";
const props = defineProps({
  name: String,
  email: String,
});

const buttons = [
  {
    msg: "Cambiar contraseña",
    class: "btn-border",
  },
  {
    msg: "Cerrar sesion",
    class: "btn-border",
  },
  {
    msg: "Guardar",
    class: "btn-red",
  },
];

function action(msg) {
  if (msg == "Guardar") {
    api
      .editPerfil({ name: props.name, email: props.email })
      .then((res) => {
        alert("Cambios Guardados con exito");
      })
      .catch(() => {
        alert("tuvimos un problema guardando tu informacion intenta mas tarde");
      });
  }
  if (msg == "Cambiar contraseña") {
    router.push({});
  }
  if (msg == "Cerrar sesion") {
    api.logOut();
    localStorage.clear();
    router.push({ name: "Home" });
  }
}
</script>

<template>
  <div :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }">
    <form @submit.prevent="onSubmit" class="row gx-3 gy-2">
      <AddUserIco></AddUserIco>
      <div class="col-sm">
        <Input
          v-model:value="name"
          label="Nombre de usuario"
          type="text"
          class="py-1"
        />
        <Input
          v-model:value="email"
          place=""
          label="Correo electrónico"
          type="email"
          class="py-1"
        />
        <div class="row">
          <div v-for="item in buttons" class="col-sm py-1">
            <Button @clicked="action" v-bind="item" class="w-100" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
}

.icon {
  font-size: 8rem;
}

@media (min-width: 768px) {
  /*.icon{
            font-size: 8rem; 
        }*/
}
</style>
