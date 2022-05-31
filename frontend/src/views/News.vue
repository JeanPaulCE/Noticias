<script setup>
import ButtonGroupThree from '../layouts/ButtonGroupThree.vue';
import Card from '../layouts/Card.vue';
import Hero from '../layouts/Carousel.vue';

import fetchAPI from '../helpers/fetchAPI';

fetchAPI().then(data => {
  console.log(data[0]);
});

</script>

<template>
	<h1>News</h1>
	<Hero />
	<ButtonGroupThree />
	<Card />
</template>

<style lang="scss" scoped>

</style>
