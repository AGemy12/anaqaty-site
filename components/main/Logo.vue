<template>
  <div class="app_header_logo">
    <a href="/">
      <img src="/black_logo.svg" alt="اناقتي" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.app_header_logo {
  max-width: 200px;
  a {
    display: flex;
    img {
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .app_header_logo {
    max-width: 120px;
  }
}
</style>
