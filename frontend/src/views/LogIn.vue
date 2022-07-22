<script setup>
import isMobile from "../helpers/isMobile";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import api from "../helpers/ApiConection";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const buttons = [
  {
    msg: "Iniciar sesión",
    class: "btn-red",
  },
  {
    msg: "Registrarme",
    class: "btn-border",
    url: "/registro",
  },
];
const mail = ref("");
const pass = ref("");

function run(msg) {
  if (msg == "Iniciar sesión") {
    localStorage.clear();
    let data = new URLSearchParams();
    data.append("email", mail.value);
    data.append("password", pass.value);
    api
      .login({ email: mail.value, password: pass.value })
      .then((res) => {
        router.push({ name: "Home" });
      })
      .catch(() => {
        alert("Credenciales incorrectas");
      });
  }
}
</script>

<template>
  <section :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }">
    <h2 class="fs-1 mb-1">Registro</h2>
    <p class="fs-5 text-white opacity-50 mb-2">
      ¡Registrate para ver las últimas noticias!
    </p>
    <form @submit.prevent="onSubmit" id="login-form" class="row gx-3 gy-2 mb-3">
      <Input
        v-model:value="mail"
        id="email"
        label="Correo electronico"
        type="text"
        class="col-md-6"
      />
      <Input
        v-model:value="pass"
        id="password"
        label="Contraseña"
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
