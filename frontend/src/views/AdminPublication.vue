<script setup>
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Input from "../components/Input.vue";

const buttons = [
  {
    msg: "Para ti",
    class: "btn-red",
  },
  {
    msg: "Popular",
    class: "btn-border",
  },
  {
    msg: "Reciente",
    class: "btn-border",
  },
];

</script>

<template>
<div class="mg--4">
  <h2>Nuevo</h2>

    <div>
      <ButtonGroupThree />
    </div>
    

  <!-- contenido -->

  <div>
    <form action="">
      <Input
          label="Titulo"
          class="w-50"
          type="input"
      ></Input>

      <Input
          label="Contenido"
          class="w-50"
          type="input"
      ></Input>


    <select name="cars" id="cars">
      <option value="accion">Accion</option>
    </select>

    <input type="file" multiple>
  </form>
  </div>

  

  <!-- contenido -->
  
</div>
  

</template>
 
<style lang="scss" scoped></style>