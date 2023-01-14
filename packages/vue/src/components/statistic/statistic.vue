<template>
  <span>{{ statisticValue }}</span>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue-demi'
import { analysisValueType } from './utils/separator'
import { Tween } from '@variesd/core'
const props = withDefaults(
  defineProps<{
    initialValue?: any
    animationDuration?: any
    groupSeparator?: any
    precision?: any
    value?: any
    start?: boolean
    animation?: boolean
    delay?: number
  }>(),
  {
    animation: true,
    start: true,
    delay: 0
  }
)
const innerValue = ref(props.initialValue ?? props.value)
const tween = ref(null)

const animation = (
  from: number = props.initialValue ?? 0,
  to: number = typeof props.value === 'number'
    ? props.value
    : Number(props.value)
) => {
  if (from !== to) {
    tween.value = new Tween({
      from: {
        value: from
      },
      to: {
        value: to
      },
      delay: props.delay,
      duration: props.animationDuration,
      easing: 'easeOutCubic',
      onUpdate: (keys: any) => {
        innerValue.value = keys.value
      },
      onFinish: () => {
        innerValue.value = to
      }
    })
    tween.value.start()
  }
}
const statisticValue = computed(() => {
  return analysisValueType(
    innerValue.value,
    props.value,
    props.groupSeparator,
    props.precision
  )
})
onMounted(() => {
  if (props.animation && props.start) {
    animation()
  }
})
// 我们可以手动控制animation
watch(
  () => props.start,
  (value) => {
    if (value && !tween.value) {
      animation()
    }
  }
)
</script>
<style lang="scss">
@import './statistic.scss';
</style>
