<script setup>
import { ref } from "vue";
import Logo from "../components/Logo.vue";

const mobile = ref(true);

if (window.innerWidth > 768) {
  mobile.value = false;
}
</script>

<template>
  <!-- Mobile NavBar -->
  <nav class="navbar navbar-expand-lg navbar-dark" v-if="mobile">
    <div class="container-fluid mx-2">
      <Logo />
    </div>
  </nav>
  <div class="second-nav" v-if="mobile">
    <div class="end position-fixed w-100 bottom-0">
      <div class="col">
        <ul class="navbar-sc row">
          <li class="sc-item col justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house row"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            <router-link class="link row" to="/">Inicio</router-link>
          </li>
          <li class="sc-item col justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house row"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            <router-link class="link row" to="/noticias">Noticias</router-link>
          </li>
          <li class="sc-item col justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house row"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            <router-link class="link row" to="/admin-perfil">Perfil</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
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
