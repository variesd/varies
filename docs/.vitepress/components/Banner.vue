<script setup>
import { ref } from 'vue'
/**
 * Adding a new banner:
 * 1. uncomment the banner slot in ../index.ts
 * 2. uncomment and update BANNER_ID in ../../inlined-scripts/restorePreferences.ts
 * 3. update --vt-banner-height if necessary
 */

let open = ref(true)

/**
 * Call this if the banner is dismissible
 */
function dismiss() {
  open = false
  document.documentElement.classList.add('banner-dismissed')
  localStorage.setItem(`vue-docs-banner-${__VUE_BANNER_ID__}`, 'true')
}
const title = `🌱 Animation Library The build will be completed soon 🌱`
</script>

<template>
  <div class="banner" v-if="open">{{ title }}</div>
</template>

<style>
html:not(.banner-dismissed) {
  --vt-banner-height: 39px;
}
</style>

<style scoped>
.banner {
  position: fixed;
  z-index: var(--vp-z-index-banner);
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;
  height: var(--vt-banner-height);
  line-height: var(--vt-banner-height);
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  /* background-color: var(--vt-c-red); */
  /* background-color: #e76dbe; */
  background: -webkit-linear-gradient(315deg, #e76dbe 25%, #4423d4);
  /* background-clip: text; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  animation: hue 4.5s linear infinite;
}
@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
.banner-dismissed .banner {
  display: none;
}
</style>
