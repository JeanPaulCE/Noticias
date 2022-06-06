<script setup>
import { ref } from "vue";
import { computed } from "vue";
const isLike = ref(false);
//const like = ref(3);

const props = defineProps({
  likes: Number,
});


let realLikes = computed(() => {
  let realLikes = props.likes;
  return realLikes;
});

console.log(realLikes);

function doLike(likes) {
  console.log(likes);
  if (isLike.value == false) {
    isLike.value = true;
    likes++;
    realLikes++;
    //console.log(isLike.value);
  } else {
    isLike.value = false;
    likes--;
    realLikes--;
    //console.log(isLike.value);
  }
}
</script>

<template>
  <div class="row">
    <div class="col-sm-2 col-4 d-flex">
      <button @click="doLike(likes)" class="btn">
        <div class="container_ico" v-if="isLike == false">
          <i class="ico bi bi-heart"></i>
        </div>

        <div v-else class="container_ico">
          <i class="bi bi-heart-fill"></i>
        </div>
      </button>
      <p class="fw-bold ps-2">{{ realLikes }}</p>
    </div>
  </div>
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

p {
  font-size: 1.5rem;
}
</style>
