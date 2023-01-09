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
import { ref } from 'vue'
import { Statistic } from '@variesd/vue'
const start = ref(true)
</script>

<style lang="scss" scoped></style>
