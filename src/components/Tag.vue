<template>
  <div class="card">
    <div class="line1">
      <img :src="profile?.img" />
    </div>
    <div class="line2">
      <h4 class="describe">{{ profile?.describe }}</h4>
      <div class="detail">
        <h3>{{ profile?.detail }}:</h3>
        <h4>{{ profile?.num }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  profile: { type: Object, default: () => {} },
  index: { type: Number, default: () => 1 }
})
</script>

<style lang="less" scoped>
.card {
  cursor: pointer;
  position: relative;
  padding: 0 15px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  // min-width: 150px;
  min-height: 75px;
  box-shadow: 1px 2px 5px rgb(12 20 54 / 35%);
  border-radius: 6px;
  margin: 0 5px;
  background: rgba(43, 80, 191, 0.6);

  .line1 {
    font-size: 16px;
    font-weight: 400;
    color: #abdcff;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .line2 {
    color: #84b2d8;
    margin-left: auto;
    // padding-right: 10px;
    width: auto;
    .describe {
      color: #ffffff;
      margin-bottom: auto;
    }
    .detail {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
