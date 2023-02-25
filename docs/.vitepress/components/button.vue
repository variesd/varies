<template>
  <button class="button">
    <div class="button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped>
.button {
  font-weight: bold;
  height: 50px;
  line-height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}
.button-content {
  padding: 0 26px;
}
.button:before {
  content: '';
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: RhyshaKachari-glowing 20s linear infinite;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

/* .button:active {
  color: #000;
}

.button:active:after {
  background: transparent;
} */
.button:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes RhyshaKachari-glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
