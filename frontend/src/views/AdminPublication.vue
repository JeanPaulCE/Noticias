<script setup>
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Input from "../components/Input.vue";
import isMobile from "../helpers/isMobile";
import Button from "../components/Button.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import fetchAPI from "../helpers/fetchAPI";

const news = ref([]);
const selectedNew = ref([]);
const route = useRoute();

const props = defineProps({
  news: Array,
});

onMounted(() => {
  fetchAPI("/news").then((data) => {
    selectedNew.value = data[route.params.id - 1];
    news.value = data;
    news.value = news.value.filter((item, index) => {
      if (item.id != selectedNew.value.id) {
        return item.category === selectedNew.value.category;
      }
    });
  });
});

const buttons = [
  {
    msg: "Perfil",
    class: "btn-border",
    url: "/admin-perfil",
  },
  {
    msg: "Lista",
    class: "btn-border",
    url: "/admin-lista",
  },
  {
    msg: "Nuevo",
    class: "btn-red",
    url: "/publicacion",
  },
];
</script>

<template>
  <section>
    <h2 class="mg--4 mb-2" :class="{ 'mx-2': isMobile() }">Nuevo</h2>
    <div class="mb-2">
      <ButtonGroupThree :buttons="buttons" />
    </div>
    <!-- contenido -->

    <div class="mg--4 inputs " :class="{ 'mx-2': isMobile() }">
      <div class="row gy-3">
        <!-- <div class="row mb-3 "> -->
        <div class="col-md-6 col-sm-12">
          <Input id="titulo" class="w-100" label="Titulo" type="text"></Input>
        </div>
        <div class="col-md-6 col-sm-12">
          <Input
            id="categoria"
            class="w-100"
            label="Categoria"
            type="text"
          ></Input>
        </div>
        <!-- </div> -->

        <!-- <div class="row"> -->
        <div class="col-md-6 col-sm-12">
          <label
            class="form-label text-white fs-4 fw-bold opacity-50 mb-1"
            for=""
            >Contenido</label
          >
          <textarea
            class="w-100 txt-area fs-5"
            name=""
            id=""
            rows="10"
          ></textarea>
        </div>
        <div class="col-md-6 col-sm-12">
          <Input id="file" class="w-100" label="Subir" type="file"></Input>
        </div>

      </div>

      <!-- <div class=""> -->
        <Button
          class="btn-red w-25 mt-2 "
          msg="Guardar"
          :type="submit"
        />
      <!-- </div> -->
      
    </div>

    <div :class="{ 'w-25': !isMobile() }" class="row my-1 mx-auto gx-2">
      <div class="col col-sm-12 d-flex justify-content-center my-1">
        <Button class="w-100 p-0" msg="Guardar" type="btn-red" url=""></Button>
      </div>
    </div>

    <!-- contenido -->
  </section>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/vars";

.txt-area {
  background-color: vars.$input;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
}
<<<<<<< HEAD
=======


>>>>>>> 6e2185a3985515feb16f5601796b334ded80f1c9
</style>
