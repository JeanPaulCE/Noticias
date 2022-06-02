<script setup>

//const id = $router.params.id;
import Like from "../components/Like.vue"
import { ref } from "vue";
import { computed } from "vue";

const id = 1;

const props = defineProps({
  news: Array,
});

const selectedNew = computed(() => {
  const selectedNew = props.news;

  return selectedNew;
});


//console.log(selectedNew[id]);
</script>

<template>

    <div v-for="(item, index) in selectedNew">
        <div v-if="index==id-1">
            <div class="container-fluid div-p mt-3">
                <img class="w-100" :src="item.image" alt="">
                <h1 class="fw-bold mt-3">{{item.title}}</h1>
            </div>
            <div class="container-fluid div-p mt-1">
                <p class="opacity-50">{{item.date}} Por: {{item.Autor}}</p>
                <p class="mt-2">{{item.content}}</p>
            </div>
            <div class="container-fluid div-p mt-2">
                <Like></Like>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .div-p{
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }

    p{
        line-height: 1.5rem;
    }

    @media (min-width: 768px) {
        h1{
            font-size: 2.375rem;
        }

        p{
            font-size: 1.5rem;
            line-height: 2.5rem;
        }
    } 

    @media (min-width: 992px) {
        .div-p{
            padding-left: 6.25rem;
            padding-right: 6.25rem;
        }
    } 

</style>