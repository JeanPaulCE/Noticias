<script setup>
import { ref } from "vue";

    const isLike = ref(false);
    //const like = ref(3);

    const props = defineProps({
        likes: Number
    });



    function computed(){
        return props.likes++;
    }

    function doLike(likes){
        console.log(likes);
        if(isLike.value==false){
            isLike.value=true;
            likes++;
            computed();
            console.log(isLike.value);
        }
        else{
            isLike.value=false;
            likes--;
            console.log(isLike.value);
        }
    }

</script>

<template>
    <div class="row">
        <div class="col-sm-1 col-2 d-flex justify-content-sm-end">
            <button @click="doLike(likes)" class="btn">
                <div v-if="isLike==false">
                    <i class="bi bi-heart"></i>
                </div>

                <div v-else>
                    <i class="bi bi-heart-fill"></i>
                </div>
            </button>
        </div>
        <div class="col-sm-11 col-10">
            <p class="fw-bold">{{likes}}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/sass/vars.scss';
    .btn{
        background: none;
        border: 0;
        padding: 0;
    }

    .btn:focus {
        box-shadow: none; 
    }

    .heart{
        color: vars.$primary;
        height: 30px;
        width: 30px;
    }

    p{
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {
        .heart{
            height: 40px;
            width: 40px;
        }   

        p{
            font-size: 2rem;
        }
    }
</style>
