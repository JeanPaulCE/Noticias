<script setup>
import isMobile from "../helpers/isMobile";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import { ref } from "vue";
import api from "../helpers/ApiConection";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const mail = ref("");
const pass = ref("");
const repass = ref("");

const buttons = [
  {
    msg: "Iniciar sesión",
    class: "btn-border",
    url: "/iniciar-sesion",
  },
  {
    msg: "Registrarme",
    class: "btn-red",
  },
];

function run(msg) {
  if (msg == "Registrarme") {
    if (pass.value == repass.value) {
      localStorage.clear();
      api
        .register({ name: name.value, email: mail.value, password: pass.value })
        .then((res) => {
          router.push({ name: "LogIn" });
        })
        .catch((res) => {
          alert("No logramos registrarte");
        });
    } else {
      alert("contraseñas no coinciden");
    }
  }
}
</script>

<template>
  <section :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }">
    <h2 class="fs-1 mb-1">Registro</h2>
    <p class="fs-5 text-white opacity-50 mb-2">
      ¡Registrate para ver las últimas noticias!
    </p>
    <form @submit.prevent="onSubmit" class="row gx-3 gy-2 mb-3" action="#">
      <Input
        v-model:value="name"
        id="username"
        label="Nombre de usuario"
        type="text"
        class="col-md-6"
      />
      <Input
        v-model:value="mail"
        id="email"
        label="Correo electrónico"
        type="email"
        class="col-md-6"
      />
      <Input
        v-model:value="pass"
        id="password"
        label="Contraseña"
        type="password"
        class="col-md-6"
      />
      <Input
        v-model:value="repass"
        id="confirmPassword"
        label="Confirmar contraseña"
        type="password"
        class="col-md-6"
      />
      <div v-for="item in buttons" class="col-md-6">
        <Button @clicked="run" v-bind="item" class="w-100" />
      </div>
    </form>
  </section>
</template>

<style lang="scss" scoped></style>
