<script setup>
import Boton from "../components/Button.vue";
import Logo from "../components/Logo.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark pc">
    <div class="container-fluid">
      <Logo />

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.pc {
  display: none;
}

@media (min-width: 576px) and(max-width:768px) {
  //md
}
@media (min-width: 768px) and (max-width: 992px) {
  //lg
}
@media (min-width: 992px) and(max-width: 1200px) {
  .pc {
    display: b;
  }
}
@media (min-width: 1200px) {
  //xl
}
</style>
