<template>
  <div class="header">
    <div class="header-left">
      <HeaderBottom :itemList="list1" position="left" />
    </div>
    <div class="header-center">智慧环保岛系统</div>
    <div class="header-right">
      <HeaderBottom :itemList="list2" position="right" />
    </div>
  </div>
</template>

<script lang="ts" setup name="header">
import { list1, list2 } from './index'
import HeaderBottom from './HeaderBottom.vue'
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  &-left {
    flex: 1;
  }
  &-center {
    width: 300px;
    text-align: center;
  }
  &-right {
    flex: 1
    // margin-right: 70px;
  }
}
</style>
