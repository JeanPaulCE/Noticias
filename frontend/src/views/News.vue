<script setup>
import { ref, onMounted } from 'vue';
import ButtonGroupThree from '../layouts/ButtonGroupThree.vue';
import Card from '../layouts/Card.vue';
import Hero from '../layouts/Carousel.vue';
import fetchAPI from '../helpers/fetchAPI';

const news = ref();
const buttons = [
  { 
    msg: 'Para ti',
    class: "btn-red"
  },
  {
    msg: 'Popular',
    class: "btn-border",
  },
  { 
    msg: 'Reciente',
    class: "btn-border" 
  }
]

onMounted(() => {
	fetchAPI().then(data => {
		news.value = data;
	});
});

</script>

<template>
	<h1>News</h1>
	<Hero />
	<ButtonGroupThree />

	<Card />
</template>

<style lang="scss" scoped></style>
