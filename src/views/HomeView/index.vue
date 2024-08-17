<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <a-layout>
      <a-layout-header class="h"> <Header /></a-layout-header>

      <a-layout-content class="c">
        <router-view v-slot="{ Component }">
          <keep-alive include="homepage">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header/index.vue'
</script>

<style lang="less" scoped>
.h {
  background: url('@/assets/images/hbg1.png') no-repeat;
  background-size: 80%;
  background-position: 50%;
  height: 84px;
  line-height: 84px;
  position: relative;
  z-index: 999;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  color: #fff;
  font-size: 22px;
  padding: 0 20px;
}

.c {
  height: calc(100% - 65px);
  background: url("~@/assets/image/bg.jpg") no-repeat center center;
  background-size: cover;
}
</style>
