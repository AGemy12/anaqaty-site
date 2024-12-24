<template>
  <section class="main_loader">
    <div>
      <img src="/black_logo.svg" alt="أناقتي" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
.main_loader {
  background-color: var(--alt_color);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  @include flex(center, center);
  div {
    width: 40%;
    margin: 0 auto;
    animation: main_loader 3s linear 300ms infinite forwards;
    img {
      width: 100%;
      display: none;
      @media (max-width: 99999px) {
        display: block;
      }
    }
  }
}

@keyframes main_loader {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
