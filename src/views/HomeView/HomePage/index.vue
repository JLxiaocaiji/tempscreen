<template>
  <div class="chart">
    <div class="chart-left">
      <Card title="参数监测">
        <div style="display: flex; justify-content: space-around; margin: 10px 0 10px">
          <Tag v-for="item in list.slice(0, 3)" :key="item.describe" :profile="item" />
        </div>
      </Card>
      <Card title="调控方案"></Card>
      <Card title="报警记录" :tab-list="tabList">
        <dv-scroll-board
          :config="config"
          style="width: 100%; height: 170px; margin: 10px 1px 0px 5px"
        />
      </Card>
    </div>
    <div class="chart-middle">
      <div class="profile"><Tag v-for="item in list" :key="item.describe" :profile="item" /></div>
      <div class="declare"><span>实时曲线</span></div>
      <div class="detail-chart">
        <Card title="原烟气烟尘"><LineChart :data="lineData" /> </Card>
        <Card title="净烟气烟尘"><LineChart :data="lineData" /></Card>
        <Card title="原烟气SO2浓度"><LineChart :data="lineData" /></Card>
        <Card title="净烟气SO2浓度"><LineChart :data="lineData" /></Card>
        <Card title="原烟气NOx浓度"><LineChart :data="lineData" /></Card>
        <Card title="净烟气NOx浓度"><LineChart :data="lineData" /></Card>
        <Card title="原烟气CO浓度"><LineChart :data="lineData" /></Card>
        <Card title="净烟气CO浓度"><LineChart :data="lineData" /></Card>
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
import Card from '@/components/Card.vue'
import Tag from '@/components/Tag.vue'
import { list } from './index'
import type { EChartsOption } from 'echarts'
import { reactive } from 'vue'
import LineChart from '@/components/chart/LineChart.vue'

const tabList = [
  {
    key: 'tab1',
    tab: '发生时间'
  },
  {
    key: 'tab2',
    tab: '报警设备'
  }
]
const config = {
  data: [
    ['单位1', '80'],
    ['单位2', '80'],
    ['单位3', '80'],
    ['单位4', '80'],
    ['单位5', '80'],
    ['单位6', '80'],
    ['单位7', '81'],
    ['单位8', '81'],
    ['单位9', '81'],
    ['单位10', '81'],
    ['单位11', '81']
  ],
  // index: true,
  columnWidth: [200, 200],
  align: ['center'],
  rowNum: 7,
  waitTime: 1000,
  oddRowBGC: '#84b2d8',
  evenRowBGC: '#919EA8'
}

const lineData: EChartsOption = reactive({
  legend: {
    //   textStyle: {
    //     color: "#fff",
    //   },
    show: false
  },
  xAxis: {
    data: [
      '2024-05-08',
      '2024-05-09',
      '2024-05-10',
      '2024-05-11',
      '2024-05-12',
      '2024-05-13',
      '2024-05-14'
    ]
  },
  yAxis: {
    min: 'dataMin',
    max: 'dataMax'
  },
  series: [
    {
      name: '设备总数',
      type: 'line',
      smooth: true,
      data: [61176, 61176, 61176, 61176, 61176, 61176, 61176],
      itemStyle: { color: '#33747d' }
    },
    {
      name: '被监听设备总数',
      type: 'line',
      smooth: true,
      data: [18561, 18561, 18561, 18561, 18561, 18561, 18561],
      itemStyle: { color: '#1562b4' }
    },
    {
      name: '在线设备数',
      type: 'line',
      smooth: true,
      data: [61273, 61273, 61273, 61273, 61273, 61273, 61273],
      itemStyle: { color: '#4fc96e' }
    },
    {
      name: '异常设备数',
      type: 'line',
      smooth: true,
      data: [8472, 8472, 8472, 8472, 8472, 8472, 8472],
      itemStyle: { color: '#E4E70C' }
    }
  ]
})
</script>

<style lang="less" scoped>
.chart {
  display: flex;

  &-left {
    flex: 1;
  }
  &-middle {
    flex: 2;
    margin: 0 10px 0;

    .profile {
      display: flex;
      justify-content: space-around;
      margin: 10px 0 10px;
    }
    .declare {
      // background: url('@/assets/images/hbg2.png');
      color: #fff;
      text-align: center;
      font-size: 22px;
      background: linear-gradient(0deg, rgba(122, 200, 255, 0.7), hsla(0, 0%, 100%, 0.7));
      color: #abdcff;
      // 延申到 text
      -webkit-background-clip: text;
      // 渐变
      -webkit-text-fill-color: transparent;
      font-weight: 900;
    }
    .detail-chart {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }
  &-right {
    flex: 1;
  }
}
</style>
