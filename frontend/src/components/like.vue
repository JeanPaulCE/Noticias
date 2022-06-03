<script setup>
import { ref } from "vue";
const isLike = ref(false);
//const like = ref(3);

const props = defineProps({
  likes: Number,
});

function computed() {
  return props.likes++;
}

function doLike(likes) {
  console.log(likes);
  if (isLike.value == false) {
    isLike.value = true;
    likes++;
    computed();
    console.log(isLike.value);
  } else {
    isLike.value = false;
    likes--;
    console.log(isLike.value);
  }
}
</script>

<template>
  <div class="row">
    <div class="col-sm-1 col-2 d-flex">
      <button @click="doLike(likes)" class="btn">
        <div class="container_ico" v-if="isLike == false">
          <i class="ico bi bi-heart"></i>
        </div>

        <div v-else class="container_ico">
          <i class="bi bi-heart-fill"></i>
        </div>
      </button>
    </div>
    <div class="col-sm-11 col-10">
      <p class="fw-bold">{{ likes }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/vars.scss";

.btn {
  background: none;
  border: 0;
  padding: 0;
  width: 100%;
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

p {
  font-size: 1.5rem;
}

// @media (min-width: 768px) {
//   .heart {
//     height: 40px;
//     width: 40px;
//   }

//   p {
//     font-size: 2rem;
//   }
// }
</style>
