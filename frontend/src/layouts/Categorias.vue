<script setup>
import { ref } from "vue";

const categorias = ref([]);
const filtro = ref([]);

function Crearfiltro(params) {
  let lista = [];
  categorias.value.forEach((element) => {
    lista.push(element.charAt(0));
  });
  lista.sort();
  filtro.value = lista;
}
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
