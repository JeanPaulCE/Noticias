<script setup>
import { ref, onMounted } from "vue";
import Footer from "./layouts/Footer.vue";
import Header from "./layouts/Header.vue";
import fetchAPI from "./helpers/fetchAPI";
import isMobile from "./helpers/isMobile";

const news = ref([]);
const mobile = ref(isMobile());

onMounted(() => {
  fetchAPI("/news").then((data) => {
    news.value = data;
  });
});
</script>

<template>
  <Header :news="news" />
  <main class="container-fluid p-0 text-white">
    <!-- <div> -->
    <router-view :news="news"></router-view>
    <!-- </div> -->
  </main>
  <div class="end position-fixed w-100 bottom-0" v-if="mobile">
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

  <Footer />
</template>

<style lang="scss" scoped>
@use "./assets/sass/spacing";

main {
  div {
    display: flex;
    flex-direction: column;
    gap: spacing.$spacer;
  }
}
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
</style>
