<script setup>
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import ProfileLayout from '../layouts/ProfileLayout.vue';



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
<div class="mg--4">
  <h2>Perfil</h2>

    <div div class="mb-2 ">
      <ButtonGroupThree 
      :buttons="buttons"
      />
    </div>

  <ProfileLayout class="mt-2"></ProfileLayout>

  

</div>
</template>

<style lang="scss" scoped></style>
