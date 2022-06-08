<script setup>
import { ref } from "vue";

const isLike = ref(false);
;


function doLike() {
  if (isLike.value == false) {
    isLike.value = true;
  } else {
    isLike.value = false;
  }
}
</script>

<template>
      <button @click="doLike(), $emit('doLike',isLike)" class="btn">
        <div class="container_ico" v-if="isLike == false">
          <i class="ico bi bi-heart"></i>
        </div>

        <div v-else class="container_ico">
          <i class="bi bi-heart-fill"></i>
        </div>
      </button>
</template>

<style lang="scss" scoped>
@use "../assets/sass/vars.scss";

.btn {
  background: none;
  border: 0;
  padding: 0;
  width: 20%;
  height: 100%;
  .container_ico {
    width: 100%;
    height: 100%;
    i {
      width: 100%;
      height: 100%;
      color: red;
      font-size: 2em;
    }
  }
}

.btn:focus {
  box-shadow: none;
}

</style>
