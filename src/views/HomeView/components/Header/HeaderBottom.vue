<template>
  <ul style="display: flex; padding: unset; height: 100%; align-items: center">
    <li
      v-for="item in itemList"
      :key="item.label"
      :class="position + '-item'"
      @click="routerJump(item.url)"
    >
      {{ item.label }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import router from '@/router/index'
import type { HeaderItem } from '@/types'

defineProps({
  itemList: { type: Array as PropType<HeaderItem[]>, default: () => [] },
  position: { type: String, default: '' }
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
  width: auto;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  border: 1px solid #ddd;
}

.left-item {
  // @extend.item;

  width: auto;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  border: 1px solid #ddd;
  margin: 0 10px 0;
  // margin: auto;

  transform: skewX(30deg);
}
.right-item {
  // @extend .item;

  width: auto;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
  flex: 1;
  border: 1px solid #ddd;
  margin: 0 10px 0;

  transform: skewX(-30deg);
}
</style>
