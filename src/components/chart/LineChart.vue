<template>
  <div ref="line"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const line = ref<HTMLDivElement | null>(null)

const props = defineProps({
  data: { type: Object, default: () => {} }
})

onMounted(() => {
  initChart()
})

const initChart = () => {
  let chart = echarts.init(line.value)

  chart.setOption({
    // 图例组件
    // legend: { ...(props.data?.legend || {}) },
    // 提示框
    tooltip: {
      trigger: 'axis'
    },
    // 工具栏
    toolbox: {},
    // x 轴
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        inside: false,
        // rotate: 45,
        // color: '#77a0c8'
        color: '#fff'
      },
      ...props.data.xAxis
    },
    yAxis: {
      axisLabel: {
        color: '#fff'
      },

      ...props.data.yAxis
    },
    series: [...props.data.series]
  })
}

watch(
  () => props.data,
  () => {
    props.data &&
      nextTick(() => {
        initChart()
      })
  },
  { deep: true }
)
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 200px;
}
</style>
