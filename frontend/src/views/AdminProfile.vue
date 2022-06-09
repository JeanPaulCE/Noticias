<script setup>
import ButtonGroupThree from "../layouts/ButtonGroupThree.vue";
import ProfileLayout from '../layouts/ProfileLayout.vue';
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
<section >
  <h2 class="mg--4 mb-2 " :class="{ 'mx-2': isMobile()}">Perfil</h2>

    <div class="mb-2 ">
      <ButtonGroupThree 
      :buttons="buttons"
      />
    </div>
    

  <ProfileLayout class="mt-2"></ProfileLayout>

  

</section>
</template>

<style lang="scss" scoped></style>
