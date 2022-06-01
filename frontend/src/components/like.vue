<script setup>
import { ref } from "vue";

    const isLike = ref(false);
    const like = ref(1);

    const props = defineProps({
        likes: Number
    });

    function doLike(){
        if(isLike.value==false){
            isLike.value=true;
            like.value++;
            console.log(isLike.value);
        }
        else{
            isLike.value=false;
            like.value--;
            console.log(isLike.value);
        }
    }

</script>

<template>
    <div class="row">
        <div class="col-sm-1 col-2 d-flex justify-content-sm-end">
            <button @click="doLike" class="btn">
                <div v-if="isLike==false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart heart" viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>

                <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill heart" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </div>
            </button>
        </div>
        <div class="col-sm-11 col-10">
            <p class="fw-bold">{{like}}</p>
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
