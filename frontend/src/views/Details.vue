<script setup>

//const id = $router.params.id;
import Like from "../components/Like.vue"
import { ref } from "vue";

const likes=ref(0);

</script>

<template>

    <div class="container-fluid div-p mt-3">
        <img class="w-100" src="../assets/fallguys.jpeg" alt="">
        <h1 class="fw-bold mt-3">El divertido 'Fall Guys' se pasa al free to play y confirma su 
        llegada a Nintendo Switch y Xbox</h1>
    </div>
    <div class="container-fluid div-p mt-1">
        <p class="opacity-50">12-05-2022 Electronic Arts</p>
        <p class="mt-2">Lorem ipsum dolor sit amet. Ut officiis quae est repudiandae quis quo sint dolorem et dolorem voluptate! In architecto voluptatem et modi doloribus est neque fugit et illum sapiente ut debitis nihil et sapiente quasi. Qui provident sapiente ea eaque porro sed odit numquam et quod voluptate in fugit tempora qui aspernatur sunt. Eos obcaecati minus et dolorem nemo ea consequatur consequuntur nam officiis tenetur.
        Id Quis enim qui natus doloribus 33 modi laboriosam in illum libero et voluptatem omnis a autem numquam aut quibusdam repellendus. Et galisum accusantium nam doloremque error in laboriosam odio At deserunt accusamus! Ut commodi ipsum et maxime voluptatibus qui enim voluptatem qui delectus inventore.
        Ut obcaecati aliquam eum repellat esse et iusto molestias et dolor tempora ut omnis explicabo non quia voluptatibus quo voluptas distinctio. Qui excepturi voluptas qui aliquid quod qui dolore veniam aut illo iste 33 eaque laboriosam et perferendis vitae sit perspiciatis architecto. Et ullam earum et facilis sunt ut corporis facere rem praesentium omnis et quasi laborum ut recusandae maiores.</p>
    </div>
    <div class="container-fluid div-p mt-2">
        <Like></Like>
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