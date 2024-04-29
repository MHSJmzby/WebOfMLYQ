<template>
  <div class="headerTitle">
    <h1 class="headh">
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'headerTitle'
}
</script>

<style lang="less" scoped>
.headerTitle {
  padding: 0;
  margin: 0;
  width: calc(100vw - 17px);
  height: 100px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/imgs/bg_header.jpg');
  background-position: 0 70%;
  background-size: cover;

  .headh {
    width: 38%;
    margin-left: 20%;
    color: #fff;
    font-size: 26px;
    font-family: 'Oswald', sans-serif;
  }
}
</style>