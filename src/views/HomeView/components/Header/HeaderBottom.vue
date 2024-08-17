<template>
  <div>
    <ul>
      <li v-for="item in itemList" :key="item.label" class="item" @click="routerJump(item.url)">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import router from '@/router/index'
import type { HeaderItem } from './index.d'

defineProps({
  itemList: { type: Array as PropType<HeaderItem[]>, default: () => [] }
})

const routerJump = (path: string) => {
  console.log(path)
  router.push({
    path: path
    // query: { },
  })
}
</script>

<style lang="less" scoped>
.item {
  //   background: url('@/assets/images/menuBg.png') no-repeat;
  width: 123px;
  height: 55px;
  display: inline-block;
  text-align: center;
  line-height: 55px;
  font-size: 14px;
  cursor: pointer;
}

.left-item {
  @extend .item;
    transform: skewX(45deg);
  }
.right-item {
  @extend .item;
    transform: skewX(-45deg);
}
</style>
