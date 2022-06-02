<script setup>
import Card from "../components/Card.vue";
import isMobile from "../helpers/isMobile";

const props = defineProps({
    news: Array,
});
</script>

<template>
    <div
      :class="{ 'mg--4': !isMobile() }"
      class="container-responsive row spacing"
    >
      <div
        v-for="(item, index) in news"
        :class="{ '': !isMobile() }"
        class="col-md-4 col-sm-12 p-0 my-2 position-relative"
      >
        <Card v-bind="item" :index="index" />
      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>