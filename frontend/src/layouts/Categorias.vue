<script setup>
import { onMounted, ref } from "vue";
import isMobile from "../helpers/isMobile";
import lateralScroll from "../helpers/lateralScroll";
import uniq from "../helpers/unique";

const categorias = ref([
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Aventura",
  "Aventura Gráfica",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Acción",
  "Aventura",
  "Aventura Gráfica",
  "Consola Virtual",
  "Deportes",
  "Estrategia",
  "Lucha",
  "Multijugador Online",
  "Musical",
  "Otros",
  "PS Network",
  "Plataformas",
  "Puzle",
  "Realidad Virtual",
  "Rol",
  "Shooter",
  "Simulación",
  "Velocidad",
  "Xbox Live Arcade",
]);
const filtro = ref([]);
const categoriasVisibles = ref([]);
const t_filtro = ref(null);
const t_categorias = ref(null);

function Crearfiltro(params) {
  let lista = [];
  categorias.value.forEach((element) => {
    lista.push(element.charAt(0));
  });
  lista.sort();
  filtro.value = uniq(lista);
}

function filtrar(letra) {
  categoriasVisibles.value = categorias.value.filter(function (item) {
    if (item.charAt(0).toUpperCase() == letra.toUpperCase()) {
      return true;
    } else return false;
  });
}

function select(cat){
  console.log("Se seleccionó => "+cat);
  this.$emit('select', cat);
}

onMounted(() => {
  Crearfiltro();
  lateralScroll(t_filtro.value);
  lateralScroll(t_categorias.value);
  filtrar(filtro.value[0]);
});
</script>

<template>
  <div class="my-2 categorias" :class="{ 'mx-3 px-1': !isMobile() }">
    <div ref="t_filtro" class="mt-2 mb-1 filtro-categorias">
      <button
        v-for="letra in filtro"
        v-on:click="filtrar(letra)"
        :id="letra"
        class="item-filtro px-1 mx-1"
        :class="{ 'px-2 mx-2': !isMobile() }"
      >
        {{ letra }}
      </button>
    </div>
    <div ref="t_categorias" class="list-categoria py-1">
      <button
        v-for="cat in categoriasVisibles"
        v-on:click="$emit('select', cat)"
        :id="cat"
        class="item-categoria mx-2"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing.scss";
@use "../assets/sass/vars.scss";
.categorias {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

  .filtro-categorias {
    width: 100%;
    padding-top: calc(spacing.$spacer/8);
    background-color: #242547;
    overflow: auto;
    white-space: nowrap;

    .item-filtro {
      color: vars.$light;
      opacity: 60%;
      display: inline-block;
      background-color: #21244500;
      border-style: none;
      height: 100%;
      text-align: center;
      align-self: baseline;
      &:hover {
        opacity: 100%;
      }
    }
  }
  .list-categoria {
    overflow: overlay;
    white-space: nowrap;
    .item-categoria {
      color: vars.$light;
      opacity: 60%;
      display: inline-block;
      background-color: #21244500;
      border-style: none;
      height: 100%;
      text-align: center;
      align-self: baseline;
      &:hover {
        opacity: 100%;
      }
    }
  }
}
</style>
