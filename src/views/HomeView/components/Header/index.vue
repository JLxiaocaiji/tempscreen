<template>
  <div class="h-left">
    <HeaderBottom :itemList="list1" />
  </div>
    <div class="">智慧环保岛系统</div>
  <div class="h-right">
    <HeaderBottom :itemList="list2" />
  </div>
</template>

<script lang="ts" setup name="header">
import { list1, list2 } from './index'
import HeaderBottom from './HeaderBottom.vue'
</script>

<style lang="less" scoped>
.h-left {
  margin-left: 45px;
}

.h-right {
  margin-right: 70px;
}
</style>
