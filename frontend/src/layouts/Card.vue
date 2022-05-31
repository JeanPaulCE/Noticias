<script setup>
const props = defineProps({
  id: String,
  title: String,
  image: String,
  index: Number,
});
</script>

<template>
  <!-- <div
      :class="index % 2 == 0 ? 'left' : 'right'"
      class="position-relative"
    > -->
  <div :class="index % 2 == 0 ? 'left' : 'right'" class="card-news">
    <div class="">
      <div class="">
        <h3>{{ title }}</h3>
        <div class="line"></div>
        <img class="w-100" :src="image" :alt="title" loading="lazy" />
        <button>ver mas</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing.scss";

img,
.line,
h3,
button {
  display: inline-block;
  position: absolute;
}
.card-news {
  position: relative;
  width: 100%;
  height: 18vh;
  padding: 0;
  div {
    position: relative;
    height: 100%;
    padding: 0;
    overflow: hidden;
    div {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 0;
      img {
        opacity: 0.34;
        position: absolute;
        width: 100%;
        top: -50%;
      }
      h3 {
        width: 60%;
        right: spacing.$spacer;
        opacity: 1;
      }
      .line {
        background: red;

        width: 4px;
        height: 6.5vh;
        opacity: 100%;
      }
      button {
        border-style: none;
        background: rgba(0, 0, 0, 0.65);
        color: #fff;
      }
    }
  }
}
.right {
  div {
    margin-left: calc(spacing.$spacer * 1.5);
    border-radius: 22px 0 0 22px;
    div {
      margin: 0;
      h3 {
        top: calc(spacing.$spacer * 0.75);
        right: spacing.$spacer;
        text-align: end;
      }
      .line {
        top: calc(spacing.$spacer * 0.75);
        right: calc(spacing.$spacer * 0.75);
        margin: 0;
      }
      button {
        padding: calc(spacing.$spacer/4) calc(spacing.$spacer/2);
        bottom: calc(spacing.$spacer/4);
        border-radius: 0 13px 13px 0;
      }
    }
  }
}

.left {
  div {
    margin-right: calc(spacing.$spacer * 1.5);
    border-radius: 0 22px 22px 0;
    div {
      h3 {
        top: calc(spacing.$spacer * 0.75);
        right: spacing.$spacer;
        text-align: end;
      }
      .line {
        top: calc(spacing.$spacer * 0.75);
        right: calc(spacing.$spacer * 0.75);
        margin: 0;
      }
      button {
        padding: calc(spacing.$spacer/4) calc(spacing.$spacer/2);
        bottom: calc(spacing.$spacer/4);
        border-radius: 0 13px 13px 0;
      }
    }
  }
}
</style>
