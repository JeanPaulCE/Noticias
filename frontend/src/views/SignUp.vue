<script setup>
    import InputAndLabel from '../components/InputAndLabel.vue';
    import isMobile from '../helpers/isMobile';
</script>

<template>
    <form
        :class="{ 'mg--4': !isMobile(), 'mx-2': isMobile() }"
    >
        <InputAndLabel />
    </form>
</template>


<style lang="scss" scoped>

</style>
