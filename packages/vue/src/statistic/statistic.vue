<template>
  <div class="statistic">
    <div class="statistic-title" style="{titleStyle}">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="statistic-content" style="{valueStyle}">
      <span v-if="prefix" class="statistic-prefix">
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      <span class="statistic--value">{{ statisticValue }}</span>
      <span v-if="suffix" class="statistic-suffix">
        <slot name="suffix">{{ suffix }}</slot>
      </span>
    </div>
    <div v-if="extra" class="statistic-extra">
      <slot name="extra">{{ extra }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue-demi'
import { statisticProps, StatisticProps } from './statistic-types'
import { analysisValueType } from './utils/separator'
import { Tween } from '@variesd/core'
const props = withDefaults(
  defineProps<{
    valueFrom?: any
    animationDuration?: any
    groupSeparator?: any
    precision?: any
    value?: any
    start?: boolean
    animation?: boolean
    title?: any
    prefix?: any
    suffix?: any
    extra?: any
    delay?: number
    valueStyle?: any
    titleValue?: any
  }>(),
  {
    animation: false,
    start: false,
    delay: 0
  }
)
const innerValue = ref(props.valueFrom ?? props.value)
const tween = ref(null)

const animation = (
  from: number = props.valueFrom ?? 0,
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
