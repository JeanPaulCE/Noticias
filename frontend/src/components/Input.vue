<script setup>
const props = defineProps({
  id: String,
  label: String,
  type: String,
  place: String,
  ico: String,
});

function preview() {
  if (props.type == "file") {
    const $seleccionArchivos = document.querySelector("#" + props.id),
      $imagenPrevisualizacion = document.querySelector("#previsualizacion");

    const archivos = $seleccionArchivos.files;

    if (!archivos || !archivos.length) {
      $imagenPrevisualizacion.src = "";
      return;
    }

    const primerArchivo = archivos[0];
    const objectURL = URL.createObjectURL(primerArchivo);
    $imagenPrevisualizacion.src = objectURL;
  }
}

function togglePasswordIcon() {
  const icon = event.target;
  const input = icon.nextSibling;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
  } else {
    input.type = "password";
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
  }
}
</script>

<template>
  <div class="col-md">
    <label
      :for="id"
      v-if="label"
      class="form-label text-white fs-4 fw-bold opacity-50 mb-1"
    >
      {{ label }}
    </label>

    <div class="position-relative">
      <img v-if="ico" class="" :src="ico" alt="" />
      <i
        v-if="type === 'password'"
        class="bi bi-eye-slash"
        @click="togglePasswordIcon"
      ></i>
      <input
        @change="preview"
        :type="type"
        class="form-control text-white fs-5"
        :placeholder="place"
        :id="id"
      />
      <label v-if="type == 'file'" class="lb-file" :for="id">
        <i class="bi bi-plus"></i>
        <div class="overflow">
          <img id="previsualizacion" src="" alt="" />
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/sass/spacing";
@use "../assets/sass/vars";
div {
  img,
  i {
    cursor: pointer;
    background-color: vars.$input;
    color: vars.$light;
    font-size: calc(spacing.$spacer / 2);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: calc(spacing.$spacer / 2);
    margin: auto 0;
  }
}
.lb-file {
  position: relative;
  width: 100%;
  height: 20vh;
  background-color: vars.$input;
  .overflow {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;

    img {
      position: relative;
      width: 100%;
      opacity: 30%;
      right: 0;
    }
  }
  i {
    z-index: 1;
    font-size: 3.5em;
    right: 50%;
    left: 50%;
  }
}

input[type="file"] {
  display: none;
}

input {
  background-color: vars.$input;
  height: spacing.$spacer;
  border: none;
  border-radius: 0.5rem;
  padding: calc(spacing.$spacer / 2);
  color: #fff;

  &:focus {
    background-color: vars.$input;
    box-shadow: none;
  }
}
</style>
