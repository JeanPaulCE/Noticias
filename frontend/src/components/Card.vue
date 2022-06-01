<script setup>
import isMobile from "../helpers/isMobile";

const props = defineProps({
  id: String,
  title: String,
  image: String,
  index: Number,
});

function position(index) {
  if (isMobile()) {
    if (index % 2 == 0) {
      return "card-news left";
    } else {
      return "card-news right";
    }
  } else {
    return "card-news dektop";
  }
}
</script>

<template>
  <div :class="position(index)">
    <div class="">
      <div class="">
        <h3>{{ title }}</h3>
        <div class="line"></div>
        <img class="w-100" :src="image" :alt="title" loading="lazy" />
        <button>ver más</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/typography";

img,
.line,
h3,
button {
  display: inline-block;
  position: absolute;
}
.card-news {
  position: relative;

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
        z-index: 0;
      }
      h3 {
        width: 60%;
        right: spacing.$spacer;
        opacity: 1;
        z-index: 1;
      }
      .line {
        z-index: 1;
        position: absolute;
        background: rgb(255, 201, 44);
        background: linear-gradient(
          360deg,
          rgba(255, 201, 44, 1) 0%,
          rgba(253, 147, 113, 1) 100%
        );
        width: 4px;
        height: 6.5vh;
        opacity: 100%;
        border-radius: 10px;
      }
      button {
        z-index: 1;
        padding: calc(spacing.$spacer/4) calc(spacing.$spacer/2);
        border-style: none;
        background: rgba(0, 0, 0, 0.65);
        color: #fff;
      }
    }
  }
}

img:hover ~ button,
h3:hover ~ button,
button:hover {
  top: 0;
  font-size: calc(typography.$font-size-base * 1.5);
  width: 100%;
  height: 100%;
  text-align: center;
}

.right {
  div {
    margin-left: calc(spacing.$spacer * 1.5);
    border-radius: 22px 0 0 22px;
    div {
      margin: 0;
      h3 {
        top: calc(spacing.$spacer * 0.75);
        left: spacing.$spacer;
        text-align: start;
      }
      .line {
        top: calc(spacing.$spacer * 0.75);
        left: calc(spacing.$spacer * 0.75);
        margin: 0;
      }
      button {
        right: 0;
        bottom: calc(spacing.$spacer/4);
        border-radius: 13px 0 0 13px;
      }
    }
  }
}

.dektop {
  margin: 0 calc(spacing.$spacer / 4);

  div {
    border-radius: 22px 22px;
    height: 20vh;
    div {
      margin: 0;
      h3 {
        top: calc(spacing.$spacer * 0.75);
        left: spacing.$spacer;
        text-align: start;
      }
      .line {
        top: calc(spacing.$spacer * 0.75);
        left: calc(spacing.$spacer * 0.75);
        margin: 0;
      }
      button {
        right: 0;
        bottom: calc(spacing.$spacer/4);
        border-radius: 13px 0 0 13px;
        padding-right: calc(spacing.$spacer * 2);
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
