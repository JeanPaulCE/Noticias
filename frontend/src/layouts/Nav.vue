<script setup>
import { ref } from "vue";
import Input from "../components/Input.vue";
import Logo from "../components/Logo.vue";
import isMobile from "../helpers/isMobile";
const mobile = ref(isMobile());
</script>

<template>
  <!-- Mobile NavBar -->
  <nav class="navbar navbar-expand-lg navbar-dark" v-if="mobile">
    <div class="container-fluid mx-2">
      <Logo />
    </div>
  </nav>

  <!-- PC NavBar -->
  <nav class="navbar navbar-expand-lg navbar-dark mx-3 pc" v-if="!mobile">
    <div class="container-fluid">
      <Logo />
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item p-1">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item p-1">
          <router-link class="nav-link" to="/noticias">Noticias</router-link>
        </li>
        <li class="nav-item p-1">
          <router-link class="nav-link" to="/admin-perfil">Perfil</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <Input
          class="w-100"
          type="input"
          ico="/ico/buscar.svg"
          place="Buscar"
        ></Input>
      </form>
    </div>
  </nav>
</template>

<style lang="scss">
@use "../assets/sass/spacing";

.second-nav {
  display: block;
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 1;

  .end {
    z-index: 2;
    div {
      display: block;
      background: #000;
      padding: calc(calc(spacing.$spacer/2) / 2) calc(spacing.$spacer/2);
      .navbar-sc {
        padding: 0;
        margin: 0;
        .sc-item {
          text-align: center;
          svg {
            color: #fff;
            margin: auto;
          }
          a {
            color: #fff;
            display: inline-block;
            text-decoration: none;
            font-size: 1rem;
            width: 100%;
          }

          padding: 0.4rem;
        }
      }
    }
  }
}
.pc {
  z-index: 2;
  div {
    ul {
      li {
        display: inline-block;
        position: relative;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}
</style>
