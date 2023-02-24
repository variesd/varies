<script setup lang="ts">
// import NewsLetter from './NewsLetter.vue'
// import SponsorsGroup from './SponsorsGroup.vue';
</script>

<template>
  <section id="hero">
    <TheExperience />
    <h1 class="tagline">
      Use
      <span class="accent"> Animation Library</span>
      <br />Simple With Easy
    </h1>
    <p class="description">
      <span class="accent">Elegant and Supple </span>
      interactive animation.
    </p>
    <p class="actions">
      <Button>
        <a class="get-started"> Get Started </a>
      </Button>
      <Button>
        <a class="setup" href="#">Demo</a>
      </Button>
    </p>
  </section>

  <!-- TODO make dynamic based on data -->
  <section id="special-sponsor">
    <span>Based on physics and mathematics</span>
    <a href="#">
      <picture>
        <!-- <source
          type="image/avif"
          srcset="https://avatars.githubusercontent.com/u/122161001"
        />
        <img
          alt="Variesd logo"
          width="36"
          height="36"
          src="https://avatars.githubusercontent.com/u/122161001"
        /> -->
      </picture>
    </a>
    <span>Use in a variety of many ways</span>
  </section>

  <section id="highlights" class="vt-box-container">
    <!-- <div class="vt-box">
      <h2>自动化 与 脚手架</h2>
      <p>
        构建自动化脚本 集成单元测试，提升开发效率， 可扩展 可定制 开发工具，
        覆盖开发全链路
      </p>
    </div>
    <div class="vt-box">
      <h2>组件库 与 框架工具库</h2>
      <p>提升开发效率， 功能严谨， 全ts开发 单元测试全覆盖， 可扩展 可定制</p>
    </div>
    <div class="vt-box">
      <h2>前端规范 与 生态</h2>
      <p>
        git 开发 提交 规范， 边缘生态， 插件开发， 定制功能， 工程化 代码规范
      </p>
    </div> -->
  </section>

  <!-- <section id="sponsors">
    <h2>Platinum Sponsors</h2>
    <SponsorsGroup tier="platinum" placement="landing" />
    <h2>Gold Sponsors</h2>
    <SponsorsGroup tier="gold" placement="landing" />
  </section> -->

  <!-- <NewsLetter /> -->
</template>
<script lang="ts">
import TheExperience from './portal-journey/TheExperience.vue';
import Button from './button.vue'
</script>
<style scoped>
.get-started {
  display: flex;
  font-size: 18px;
  font-weight: bold;
}
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

.accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #e76dbe 25%, #4423d4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hue 4.5s linear infinite;
  font-weight: bold;
}
@keyframes hue {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 54px auto 40px;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 35px;
}

/* .actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-red);
  color: #fff;
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-red-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-red-light);
} */

.actions .setup {
  border: 1px solid var(--vt-c-red-light);
  color: var(--vt-c-text-code);
  font-weight: bold;
  font-size: 18px;
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#special-sponsor {
  border-top: 1px solid var(--vt-c-divider-light);
  border-bottom: 1px solid var(--vt-c-divider-light);
  padding: 12px 24px;
  text-align: center;
}

#special-sponsor span {
  color: var(--vt-c-text-2);
  font-weight: bold;
  vertical-align: middle;
  margin: 0 24px;
  font-size: 18px;
}

#special-sponsor img {
  display: inline-block;
  vertical-align: middle;
  height: 36px;
}

.dark #special-sponsor img {
  filter: grayscale(1) invert(1);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor img {
    display: block;
    margin: 2px auto 1px;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
