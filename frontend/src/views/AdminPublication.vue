<script setup>
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import Input from "../components/Input.vue";
import isMobile from "../helpers/isMobile";

const buttons = [
  {
    msg: "Perfil",
    class: "btn-red",
  },
  {
    msg: "Lista",
    class: "btn-border",
  },
  {
    msg: "Nuevo",
    class: "btn-border",
  },
];

</script>

<template>
<div class="mx-2" :class="{ 'mg--4': !isMobile() }">

  <h2 class="mb-2">Nuevo</h2>

    <div class="mb-2">
      <ButtonGroupThree 
      :buttons="buttons"
      />
    </div>
    

  <!-- contenido -->

  <div class="">

      <div class="row">
        <div class="row mb-3">
          <div class="col-md-6 col-sm-12">
            <Input
              class="w-100"
              label="Titulo"
              type="text"
            ></Input>
          </div>
          <div class="col-md-6 col-sm-12">
            <Input
              class="w-100"
              label="Categoria"
              type="text"
            ></Input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <label class="form-label text-white fs-4 fw-bold opacity-50 mb-1" for="">Contenido</label>
            <textarea class="w-100 txt-area fs-5" name="" id=""  rows="10"></textarea>
          </div>
          <div class="col-md-6 col-sm-12">
            <Input
              class="w-100"
              label="Subir"
              type="file"
            ></Input>
          </div>
        </div>
        
        
      </div>
  </div>

  

  <!-- contenido -->
  
</div>
  

</template>
 
<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/vars";

  .txt-area{
    background-color: vars.$input;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
  }
  
</style>