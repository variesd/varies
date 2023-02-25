<template>
  <div>
    <Statistic
      title="Animation Growth Rate"
      :value="88.265"
      suffix="%"
      :value-from="0"
      start
      :animation-duration="2000"
      animation
    ></Statistic>
  </div>
</template>

<script setup lang="ts">
import { cubicBezier } from '@variesd/easing'
import { ref } from 'vue'
import { Statistic } from '@variesd/vue'
const start = ref(true)
const res = cubicBezier(0.2, 0.5, 0.6, 0.3)(0)
console.log(res)
</script>

<style lang="scss" scoped></style>
