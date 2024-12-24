<template>
  <div class="app_header_content_top_header_socail_group">
   
    <SocialItem
      icon-name="akar-icons:facebook-fill"
      path="https://www.facebook.com/profile.php?id=61569106880806&mibextid=ZbWKwL"
    />
    <SocialItem
      icon-name="akar-icons:instagram-fill"
      path="https://www.instagram.com/anaqaty2024/profilecard/?igsh=MTlpOHRzOXg2dHpxeg=="
    />
    <SocialItem
      icon-name="akar-icons:youtube-fill"
      path="https://youtube.com/@anaqatyy?si=Lk0MEdCgHS1QA8K8"
    />
    <SocialItem
      icon-name="akar-icons:x-fill"
      path="https://x.com/anaqatyy?t=fmgRWnCSlhtYcnEt4NWaKg&s=09"
    />
    <SocialItem
      icon-name="ic:baseline-tiktok"
      path="https://www.tiktok.com/@anaqaty1"
    />
    <SocialItem
      icon-name="akar-icons:telegram-fill"
      path="https://t.me/Aanaqatyy"
    />
    <SocialItem icon-name="mdi:gmail" path="mailto:anaqatyy@gmail.com" />
  </div>
</template>

<script setup lang="ts">
import SocialItem from "../mini/SocialItem.vue";
</script>

<style lang="scss">
.app_header_content_top_header_socail_group {
  @include flex(center, center, row, 10px);
}

@media (max-width: 768px) {
  .app_header_content_top_header_socail_group {
    display: none;
  }
}
</style>
