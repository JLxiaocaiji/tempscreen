<template>
  <div class="">
    <div class="chart-left">
      <Card title="参数监测"></Card>
      <Card title="调控方案"></Card>
      <Card title="报警记录"></Card>
    </div>
    <div class="chart-middle">
      <div></div>
      <div><span>实时曲线</span></div>
      <div>
        <Card title="原烟气烟尘"></Card>
        <Card title="净烟气烟尘"></Card>
        <Card title="原烟气SO2浓度"></Card>
        <Card title="净烟气SO2浓度"></Card>
        <Card title="原烟气NOx浓度"></Card>
        <Card title="净烟气NOx浓度"></Card>
        <Card title="原烟气CO浓度"></Card>
        <Card title="净烟气CO浓度"></Card>
      </div>
    </div>
    <div class="chart-right">
      <Card title="除尘健康状态-高压"></Card>
      <Card title="除尘健康状态-低压"></Card>
      <Card title="粉尘比电阻"></Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "@/components/Card.vue" 

</script>

<style lang="less" scoped>

</style>
